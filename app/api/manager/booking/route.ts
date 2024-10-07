import { NextResponse } from "next/server";
import { seatBookingSchema } from "../../../../helpers/zod";
import { db } from "../../../../lib/db";

export async function POST (request: Request) {
    try {
        const body = await request.json();
        const parsedBody = seatBookingSchema.safeParse(body);

        if (!parsedBody.success) {
            return NextResponse.json({
                error: 'Invalid inputs'
            }, {
                status: 400
            });
        }

        const { seatsOccupied, categoryId, bookingDate } = parsedBody.data;

        const seatCategory = await db.seatCategory.findUnique({
            where: {
                id: categoryId
            },
            include: {
                seatBookings: true
            }
        });

        if (!seatCategory) {
            return NextResponse.json({
                error: "Seat category does not exist"
            }, {
                status: 400
            });
        }

        const totalSeatsOccupiedToday = await db.seatBooking.aggregate({
            where: {
                categoryId: categoryId,
                bookingDate: new Date(bookingDate)
            },
            _sum: {
                seatsOccupied: true
            }
        });

        const totalSeatsBooked = totalSeatsOccupiedToday._sum.seatsOccupied || 0;

        const availableSeats = seatCategory.totalSeats - totalSeatsBooked;

        if (seatsOccupied > availableSeats) {
            return NextResponse.json({
                error: `Cannot book more than ${availableSeats} seats in this category`
            }, {
                status: 400
            });
        }

        const booking = await db.seatBooking.create({
            data: {
                seatsOccupied,
                bookingDate: new Date(bookingDate),
                category: {
                    connect: {
                        id: categoryId
                    }
                } 
            }
        });

        return NextResponse.json({
            message: "Seat booking completed succesfully",
            booking: booking
        }, {
            status: 201
        });
    } catch (error) {
        console.error("Error while booking seats: ", error);
        return NextResponse.json({
            error: "Something went wrong while booking seats"
        }, {
            status: 500
        });
    }
}