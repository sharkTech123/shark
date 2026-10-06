import * as yup from "yup";

export const postcodeSchema = yup.object({
    postcode: yup.string().required("Postcode is required").trim(),
    city: yup.string().required("City is required").trim(),
    country: yup.string().required("Country is required").trim()
}); 