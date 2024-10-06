import { NextRequest, NextResponse } from "next/server";
import { seatCategorySchema } from "../../../../../helpers/zod";
import { db } from "../../../../../lib/db";

export async function POST (request: NextRequest) {
    try {
        const body = await request.json();
        const parsedBody = seatCategorySchema.safeParse(body);

        if (!parsedBody.success) {
            return NextResponse.json({
                error: "Invalid inputs"
            }, {
                status: 400
            });
        }

        const { managerId, movieId, seatCategory } = parsedBody.data;

        const movie = await db.movie.findUnique({
            where: {
                id: movieId
            },
            include: {
                branch: true
            }
        });

        if (!movie) {
            return NextResponse.json({
                error: "Movie not found"
            }, {
                status: 400
            });
        }

        if (movie.branch.managerId !== managerId) {
            return NextResponse.json({
                error: "Manager does not have access to this movie"
            }, {
                status: 403
            });
        }

        const newSeatCategory = await db.seatCategory.create({
            data: {
                name: seatCategory.categoryName,
                price: seatCategory.price,
                totalSeats: seatCategory.totalSeats,
                movieId: movieId,
            }
        })

        return NextResponse.json({
            message: "Seat category created successfully",
            seatCategory: newSeatCategory
        }, {
            status: 201
        });
    } catch (error) {
        console.error('Error adding seat category:', error);
        return NextResponse.json({
            error: "Something went wrong while creating new seat category"
        }, {
            status: 500
        });
    }
}