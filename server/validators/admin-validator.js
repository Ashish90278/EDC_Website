import { z } from "zod";

export const membersSchema = z.object({
  name: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name must be atleast of 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),
  year: z
    .string({ required_error: "Year is Required" })
    .trim()
    .min(3, { message: "Year must be atleast of 3 characters" })
    .max(3, { message: "Year must not be more than 3 characters" }),
  post: z
    .string({ required_error: "Post is Required" })
    .trim()
    .min(4, { message: "Post must be atleast of 4 characters" })
    .max(30, { message: "Post must not be more than 30 characters" }),
  department: z
    .string({ required_error: "Department is Required" })
    .trim()
    .min(4, { message: "Department must be atleast of 4 characters" })
    .max(20, { message: "Department must not be more than 20 characters" }),
  image: z
    .string({ required_error: "Image URL is Required" })
    .trim()
    .startsWith("https://ik.imagekit.io/lbqkuzbjo/", {
      message: "Must provide Valid Image URL",
    }),
  linkedIn: z
    .string({ required_error: "Linkedin URL is Required" })
    .trim()
    .startsWith("https://www.linkedin.com/", {
      message: "Must provide Valid Linkedin URL",
    }),
  instagram: z
    .string({ required_error: "Instagram URL is Required" })
    .trim()
    .startsWith("https://www.instagram.com/", {
      message: "Must provide Valid Instagram URL",
    }),
  x: z
    .string({ required_error: "X URL is Required" })
    .trim()
    .startsWith(("https://twitter.com/") , { message: "Must provide Valid X URL" }),
});
