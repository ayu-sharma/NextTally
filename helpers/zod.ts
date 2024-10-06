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

export type AdminSignupInput = z.infer<typeof adminSignupInput>;
export type AdminLoginInput = z.infer<typeof adminLoginInput>;
export type NewBranchInput = z.infer<typeof newBranchInput>;
export type ManagerLoginInput = z.infer<typeof managerLoginInput>;