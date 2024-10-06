import { NextRequest, NextResponse } from "next/server";
import { newBranchInput } from "../../../../helpers/zod";
import { db } from "../../../../lib/db";
import { genSalt, hash } from "bcrypt";

export async function POST (request: NextRequest) {
    try {
        const body = await request.json();
        const parsedBody = newBranchInput.safeParse(body);

        if (!parsedBody.success) {
            return NextResponse.json({
                error: "Invalid inputs"
            }, {
                status: 400
            });
        }

        const admin = await db.admin.findUnique({
            where: {
                id: body.adminId
            }
        });

        if (!admin) {
            return NextResponse.json({
                error: "Admin not found"
            }, {
                status: 404
            });
        }

        const existingManager = await db.manager.findUnique({
            where: {
                email: body.managerEmail
            }
        });

        if (existingManager) {
            return NextResponse.json({
                error: "Manager with this email already exists"
            }, {
                status: 400
            });
        }

        const salt = await genSalt(10);
        const managerHashedPassword = await hash(body.managerPassword, salt);

        const newBranch = await db.$transaction(async (db) => {
            const newManager = await db.manager.create({
                data: {
                    name: body.managerName,
                    email: body.managerEmail,
                    password: managerHashedPassword
                }
            });
            const newBranch = await db.branch.create({
                data: {
                    name: body.branchName,
                    location: body.branchLocation,
                    adminId: body.adminId,
                    managerId: newManager.id
                }
            });
            return newBranch;
        });

        return NextResponse.json({
            message: "Branch and manager added successfully",
            branch: newBranch
        }, {
            status: 201
        });
    } catch (error) {
        console.error("Error while adding new branch: ", error);
        return NextResponse.json({
            error: "Something went wrong while adding new branch"
        }, {
            status: 500
        });
    }
}