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

export type SignupInput = z.infer<typeof adminSignupInput>;
export type LoginInput = z.infer<typeof adminLoginInput>;