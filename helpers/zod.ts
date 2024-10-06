import z from "zod";

// Admin Type Validation :-

export const adminSignupInput = z.object({
    adminName: z.string(),
    adminEmail: z.string().email(),
    adminPassword: z.string().min(8),
    branchName: z.string(),
    branchLocation: z.string(),
    managerName: z.string(),
    managerEmail: z.string().email(),
    managerPassword: z.string().min(8)
});

export const adminLoginInput = z.object({
    email: z.string().email(),
    password: z.string().min(8)
});

// Create branch under existing Admin :-

export const newBranchInput = z.object({
    adminId: z.number(),
    branchName: z.string(),
    branchLocation: z.string(),
    managerName: z.string(),
    managerEmail: z.string().email(),
    managerPassword: z.string().min(8)
});

// Manager login :-
export const managerLoginInput = z.object({
    email: z.string().email(),
    password: z.string().min(8)
});

// Creating Movie & Seat Categories by manager :-
export const seatCategorySchema = z.object({
    managerId: z.number(),
    movieId: z.number(),
    seatCategory: z.object({
    categoryName: z.string(),
    price: z.number().positive(),
    }),
});

export const newMovieSchema = z.object({
    branchId: z.number(),
    managerId: z.number(),
    movieName: z.string(),
    seatCategory: z.object({
        categoryName: z.string(),
        price: z.number().positive(),
        totalSeats: z.number().int().positive()
    })
});

export type AdminSignupInput = z.infer<typeof adminSignupInput>;
export type AdminLoginInput = z.infer<typeof adminLoginInput>;
export type NewBranchInput = z.infer<typeof newBranchInput>;
export type ManagerLoginInput = z.infer<typeof managerLoginInput>;
export type SeatCategorySchema = z.infer<typeof seatCategorySchema>;
export type NewMovieSchema = z.infer<typeof newMovieSchema>;