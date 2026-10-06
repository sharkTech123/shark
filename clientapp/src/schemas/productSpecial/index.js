import * as yup from "yup";

export const productSpecialSchema = yup.object({
  name: yup.string().required("Name is required").trim(),
  price: yup.number().required("Price is required"),
  Category: yup.string().required("Category is required").trim(),
  rating: yup.number().required("Rating is required"),
  
  createdOn: yup.date().required().default(() => new Date()),
  isUpdated: yup.boolean().required("Update status is required").default(false),
  modifiedOn: yup.date(),
  isDeleted: yup.boolean().required("Deletion status is required").default(false),
  deletedOn: yup.date(),
});