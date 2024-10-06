import { NextRequest, NextResponse } from "next/server";
import { newMovieSchema } from "../../../../helpers/zod";
import { db } from "../../../../lib/db";

export async function POST (request: NextRequest) {
    try {
        const body = await request.json();
        const parsedBody = newMovieSchema.safeParse(body);

        if (!parsedBody.success) {
            return NextResponse.json({
                error: "Invalid inputs"
            }, {
                status: 400
            });
        }

        const { branchId, managerId, movieName, seatCategory } = parsedBody.data;

        const branch = await db.branch.findUnique({
            where: {
                id: branchId
            },
            include: {
                manager: true
            }
        });

        if (!branch) {
            return NextResponse.json({
                error: "Branch not found"
            }, {
                status: 400
            });
        }

        if (branch.managerId !== managerId) {
            return NextResponse.json({
                error: "Manager does not have access to this branch"
            }, {
                status: 403
            });
        }

        const newMovie = await db.$transaction(async (db) => {
            const movie = await db.movie.create({
                data: {
                    title: movieName,
                    branchId: branchId
                }
            });

            await db.seatCategory.create({
                data: {
                    name: seatCategory.categoryName,
                    price: seatCategory.price,
                    movieId: movie.id,
                    totalSeats: seatCategory.totalSeats
                }
            });


            return movie;
        });

        return NextResponse.json({
            message: "Movie and seat category created successfully",
            movie: newMovie
        }, {
            status: 201
        });
    } catch (error) {
        console.error('Error adding movie and seat categories:', error);
        return NextResponse.json({
            error: "Something went wrong while creating new movie"
        }, {
            status: 500
        });
    }
}