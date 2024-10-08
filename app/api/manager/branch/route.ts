import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../lib/db";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const managerId = parseInt(searchParams.get('managerId'), 10);

        if (!managerId || isNaN(managerId)) {
            return NextResponse.json({
                error: 'Manager ID is required and must be a valid integer'
            }, {
                status: 400
            });
        }

        const manager = await db.manager.findUnique({
            where: {
                id: managerId
            },
            include: {
                branch: true
            }
        });

        if (!manager || !manager.branch) {
            return NextResponse.json({
                error: "Manager not found or not associated with any branch"
            }, {
                status: 400
            });
        }

        const branchId = manager.branch.id;

        const branchDetails = await db.branch.findUnique({
            where: {
                id: branchId
            },
            include: {
                movies: {
                    include: {
                        seatCategories: {
                            include: {
                                seatBookings: true
                            }
                        }
                    }
                },
                manager: true
            }
        });

        if (!branchDetails) {
            return NextResponse.json({
                error: "Branch details not found"
            }, {
                status: 400
            });
        }

        const branchWithRevenue = {
            ...branchDetails,
            movies: branchDetails.movies.map(movie => {
                let totalMovieRevenue = 0;

                const seatCategoriesWithRevenue = movie.seatCategories.map(category => {
                    const totalSeatsOccupied = category.seatBookings.reduce(
                        (sum, booking) => sum + booking.seatsOccupied,
                        0
                    );
                    const categoryRevenue = totalSeatsOccupied * category.price;
                    totalMovieRevenue += categoryRevenue;

                    return {
                        ...category,
                        totalSeatsOccupied,
                        categoryRevenue
                    }
                });

                return {
                    ...movie,
                    seatCategoriesWithRevenue,
                    totalMovieRevenue
                };
            })
        };

        return NextResponse.json({
            branch: branchWithRevenue
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Error while fetching branch details: ", error);
        return NextResponse.json({
            error: "Error while fetching branch details"
        }, {
            status: 500
        });
    }
}