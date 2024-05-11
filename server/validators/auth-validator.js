import { z } from "zod";

export const signupSchema = z.object({
    username : z
    .string({required_error: "Name is Required"})
    .trim()
    .min(3,{message:"Username must be atleast of 3 characters"})
    .max(255,{message:"Username must not be more than 255 characters"}),
    email : z
    .string({required_error: "Email is Required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3,{message:"Email must be atleast of 3 characters"})
    .max(255,{message:"Email must not be more than 255 characters"}),
    phone : z
    .string({required_error: "Phone No. is Required"})
    .trim()
    .min(10,{message:"Phone No. must be atleast of 3 characters"})
    .max(20,{message:"Phone No. must not be more than 255 characters"}),
    password : z
    .string({required_error: "Password is Required"})
    .trim()
    .min(7,{message:"Password must be atleast of 3 characters"})
    .max(255,{message:"Password must not be more than 255 characters"}),
})