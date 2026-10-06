import * as yup from "yup";

export const categorySchema = yup.object({
  name: yup.string().required("Name is required").trim(),
  description: yup.string().trim(),
  createdOn: yup.date(),
  isDeleted: yup.boolean().default(false),
  deletedOn: yup.date(),
});

export const createAreaSchema = yup.object({
  name: yup.string().required("Area Name is required").trim(),
});
