import { NextRequest, NextResponse } from "next/server";
import { managerLoginInput } from "../../../../helpers/zod";
import { db } from "../../../../lib/db";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "../../../../helpers/constants";

export async function POST (request: NextRequest) {
    try {
        const body = await request.json();
        const parsedBody = managerLoginInput.safeParse(body);

        if (!parsedBody.success) {
            return NextResponse.json({
                error: "Invalid inputs"
            }, {
                status: 400
            });
        }

        const manager = await db.manager.findUnique({
            where: {
                email: body.email
            }
        });

        if (!manager) {
            return NextResponse.json({
                error: "Manager does not exist"
            }, {
                status: 400
            });
        }

        const validPassword = await compare(body.password, manager.password);

        if (!validPassword) {
            return NextResponse.json({
                error: "Password is incorrect"
            }, {
                status: 403
            });
        } else {
            const token = await sign({ id: manager.id }, JWT_SECRET);
            return NextResponse.json({
                message: "Manager login successful",
                token: token
            }, {
                status: 201
            });
        }
    } catch (error) {
        console.error("Error while manager login: ", error);
        return NextResponse.json({
            error: "Manager login failed"
        }, {
            status: 500
        })
    }
}