import { NextRequest, NextResponse } from "next/server";
import { adminLoginInput } from "../../../../helpers/zod";
import { db } from "../../../../lib/db";
import { compare } from "bcrypt";
import { JWT_SECRET } from "../../../../helpers/constants";
import { sign } from "jsonwebtoken";

export async function POST (request: NextRequest) {
    try {
        const body = await request.json();
        const parsedBody = adminLoginInput.safeParse(body);

        if (!parsedBody.success) {
            return NextResponse.json({
                error: "Invalid inputs"
            }, {
                status: 400
            });
        }

        const admin = await db.admin.findUnique({
            where: {
                email: body.email
            }
        });

        if (!admin) {
            return NextResponse.json({
                error: "Admin does not exist"
            }, {
                status: 403
            });
        }

        const validPassword = await compare(body.password, admin.password);

        if (!validPassword) {
            return NextResponse.json({
                error: "Password is incorrect"
            }, {
                status: 403
            });
        } else {
            const token = await sign({ id: admin.id }, JWT_SECRET);
            return NextResponse.json({
                message: "Admin login successful",
                token: token
            }, {
                status: 201
            });
        }
    } catch (error) {
        console.error("Error while admin login: ", error);
        return NextResponse.json({
            error: "Admin login failed"
        }, {
            status: 500
        })
    }
}