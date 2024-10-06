import { NextRequest, NextResponse } from "next/server";
import { adminSignupInput } from "../../../../helpers/zod";
import { db } from "../../../../lib/db";
import { genSalt, hash } from "bcrypt";
import { JWT_SECRET } from "../../../../helpers/constants";
import { sign } from "jsonwebtoken";

export async function POST (request: NextRequest) {
    try {
        const body = await request.json();
        const parsedBody = adminSignupInput.safeParse(body);

        if (!parsedBody.success) {
            return NextResponse.json({
                error: "Invalid inputs",
                issues: parsedBody.error.format()
            }, {
                status: 400
            });
        }
        
        const existingAdmin = await db.admin.findUnique({
            where: {
                email: body.adminEmail
            }
        });

        if (existingAdmin) {
            return NextResponse.json({
                error: "Admin with this email already exists"
            }, {
                status: 403
            });
        }

        const salt = await genSalt(10);
        const adminHashedPassword = await hash(body.adminPassword, salt);
        const managerHashedPassword = await hash(body.managerPassword, salt);

        const newAdmin = await db.$transaction(async (db) => {
            const newManager = await db.manager.create({
                data: {
                    name: body.managerName,
                    email: body.managerEmail,
                    password: managerHashedPassword
                }
            });

            const newAdmin = await db.admin.create({
                data: {
                    name: body.adminName,
                    email: body.adminEmail,
                    password: adminHashedPassword,
                    branches: {
                        create: {
                            name: body.branchName,
                            location: body.branchLocation,
                            managerId: newManager.id
                        }
                    }
                }
            });

            return newAdmin;
        });

        const token = await sign({id: newAdmin.id}, JWT_SECRET);

        return NextResponse.json({
            message: "Admin and branch created successfully",
            admin: newAdmin,
            token: token
        }, {
            status: 201
        });

    } catch (error) {
        console.error("Error creating admin: ", error);
        return NextResponse.json({
            error: "Something went wrong while creating admin"
        }, {
            status: 500
        });
    }
}