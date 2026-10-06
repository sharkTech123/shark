import * as yup from "yup";

export const productSchema = yup.object({
  name: yup.string().required("Name is required").trim(),
  category: yup.string().required("Category is required").trim(),
  image: yup.string().trim(),
  price: yup.number().required("Price is required"),
  duration: yup.number().required("duration is required"),
  experience: yup.string().trim(),
  transmission: yup.string().trim(),
  postcode: yup.string(),
  areaIncluded: yup.string(),
  rating: yup.number(),
  description: yup.string().trim(),
  
  createdOn: yup.date().required().default(() => new Date()),
  isUpdated: yup.boolean().required("Update status is required").default(false),
  modifiedOn: yup.date(),
  isDeleted: yup.boolean().required("Deletion status is required").default(false),
  deletedOn: yup.date(),
});