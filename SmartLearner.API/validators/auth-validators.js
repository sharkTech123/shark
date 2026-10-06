const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 characters." })
    .max(100, { message: "Name must not exceed 100 characters." }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be at least 7 characters." })
    .max(100, { message: "Password must not exceed 100 characters." }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters." })
    .max(100, { message: "Email must not exceed 100 characters." }),
    phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number must be at least 10 characters." })
    .max(20, { message: "Phone number must not exceed 20 characters." }),
    roleName: z
    .string({ required_error: "AccountType is required" })
    .trim()
    .min(3, { message: "AccountType must be at least of 3 characters." })
    .max(100, { message: "AccountType must not exceed 100 characters." }),

});

module.exports = signupSchema;
