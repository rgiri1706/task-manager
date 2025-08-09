const { z } = require("zod");

const signupSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.email({ error: "Invalid email address" }),
    password: z.string().min(6, "Password must be at least 6 characters long")
});

const loginSchema = z.object({
    email: z.email({ error: "Invalid email address" }),
    password: z.string().min(6, "Password must be at least 6 characters long")
});

module.exports = { signupSchema, loginSchema };