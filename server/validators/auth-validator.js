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
    .min(10,{message:"Phone No. must be atleast of 10 characters"})
    .max(20,{message:"Phone No. must not be more than 20 characters"}),
    password : z
    .string({required_error: "Password is Required"})
    .trim()
    .min(7,{message:"Password must be atleast of 7 characters"})
    .max(255,{message:"Password must not be more than 255 characters"}),
})
export const loginSchema = z.object({
    username : z
    .string({required_error: "Name is Required"})
    .trim()
    .min(3,{message:"Username must be atleast of 3 characters"})
    .max(255,{message:"Username must not be more than 255 characters"}),
    password : z
    .string({required_error: "Password is Required"})
    .trim()
    .min(7,{message:"Password must be atleast of 7 characters"})
    .max(255,{message:"Password must not be more than 255 characters"}),
})
export const registerSchema = z.object({
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
    branch : z
    .string({required_error: "Branch is Required"})
    .trim()
    .min(3,{message:"Branch must be atleast of 3 characters"})
    .max(100,{message:"Branch must not be more than 100 characters"}),
    year : z
    .string({required_error: "Year is Required"})
    .trim()
    .min(1,{message:"Year must be atleast of 1 characters"})
    .max(7,{message:"Year must not be more than 7 characters"}),
    admissionNo : z
    .string({required_error: "Admission No. is Required"})
    .trim()
    .min(7,{message:"Admission No. must be atleast of 7 characters"})
    .max(12,{message:"Admission No. must not be more than 12 characters"}),
})
export const contactSchema = z.object({
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
    subject : z
    .string({required_error: "Subject is Required"})
    .trim()
    .min(10,{message:"Subject must be atleast of 10 characters"})
    .max(100,{message:"Subject must not be more than 100 characters"}),
    message : z
    .string({required_error: "Message is Required"})
    .trim()
    .min(20,{message:"Message must be atleast of 20 characters"})
    .max(255,{message:"Message must not be more than 255 characters"}),
})
