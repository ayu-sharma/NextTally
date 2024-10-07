import { NextRequest, NextResponse } from "next/server";
import { newBranchInput } from "../../../../helpers/zod";
import { db } from "../../../../lib/db";
import { genSalt, hash } from "bcrypt";

export async function GET (request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const adminId = parseInt(searchParams.get('adminId'), 10);

        if (!adminId || isNaN(adminId)) {
            return NextResponse.json({
                error: 'Admin ID is required and must be a valid integer'
            }, {
                status: 400
            });
        }

        const admin = await db.admin.findUnique({
            where: {
                id: adminId
            }
        });

        if (!admin) {
            return NextResponse.json({
                error: "Admin not found"
            }, {
                status: 400
            });
        }

        const branches = await db.branch.findMany({
            where: {
                adminId: adminId
            },
            include: {
                manager: true,
                movies: {
                    include: {
                        seatCategories: {
                            include: {
                                seatBookings: true
                            }
                        }
                    }
                }
            }
        });

        if (!branches.length) {
            return NextResponse.json({
                error: "No branches found for this admin"
            }, {
                status: 400
            });
        }

        return NextResponse.json({
            branches
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Error fetching branch details: ", error);
        return NextResponse.json({
            error: "Error while fetching branches"
        }, {
            status: 500
        });
    }
}

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
