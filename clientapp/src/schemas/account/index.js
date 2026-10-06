import * as yup from "yup";
import { emailrgx, passwordRegex } from "../../constants";

export const registerformSchema = yup.object({
  username: yup.string().required("Username is required").trim(),
  email: yup
    .string()
    .required("Email is required")
    .matches(emailrgx, "Invalid Email")
    .trim(),
  password: yup
    .string()
    .required("Password is required")
    .min(7)
    .matches(
      passwordRegex,
      "Password must have one special character and one uppercase letter"
    )
    .trim(),
  //   confirmPassword: yup
  //     .string()
  //     .required("Confirm Password is required")
  //     .oneOf([yup.ref("password"), null], "Password must match")
  //     .trim(),

  phoneNumber: yup.string().required("Mobile Number is required").trim(),
  roleName: yup.string().required("Account Type is required").trim(),
});

export const forgotPassword = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .matches(emailrgx, "Invalid Email")
    .trim(),
  
});

export const loginformSchema = yup.object({
  usernameOremail: yup.string().required("username or Email is required").trim(),
  password: yup.string().required("Password is required").trim(),
});

export const createRoleSchema = yup.object({
  name: yup.string().required("Role Name is required").trim(),
});

export const userSchema = yup.object({
  username: yup.string().required("Username is required").trim(),
  email: yup
    .string()
    .required("Email is required")
    .matches(emailrgx, "Invalid Email")
    .trim(),
  password: yup
    .string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters")
    .matches(
      passwordRegex,
      "Password must have one special character and one uppercase letter"
    )
    .trim(),
  //   confirmPassword: yup
  //     .string()
  //     .required("Confirm Password is required")
  //     .oneOf([yup.ref("password"), null], "Passwords must match")
  //     .trim(),
  phoneNumber: yup.string().required("Mobile Number is required").trim(),
  roleName: yup.string().required("Account Type is required").trim(),
});

export const edituserSchema = yup.object({
  username: yup.string().required("Username is required").trim(),
  email: yup
    .string()
    .required("Email is required")
    .matches(emailrgx, "Invalid Email")
    .trim(),
  phoneNumber: yup.string().required("Mobile Number is required").trim(),
  roleName: yup.string().required("Account Type is required").trim(),
  // privacyPolicy: yup
  //     .boolean()
  //     .oneOf([true], "Privacy Policy must be accepted")
  //     .required("Privacy Policy must be accepted"),
});

export const editPassworduserSchema = yup.object({
  password: yup
    .string()
    .required("Password is required")
    .min(7, "Password must be at least 7 characters")
    .matches(
      passwordRegex,
      "Password must have one special character and one uppercase letter"
    )
    .trim(),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .trim(),
});
