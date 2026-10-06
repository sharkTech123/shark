const { z } = require("zod");
// /////////////////Login schema /////////////////////////////

const loginSchema = z.object({

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address." })
    .min(3, { message: "Email must be at least 3 characters." })
    .max(100, { message: "Email must not exceed 100 characters." }),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters." })
    .max(100, { message: "Password must not exceed 100 characters." }),
});
module.exports = loginSchema;
