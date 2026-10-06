import { combineReducers } from "redux";
import authSlice from "../features/authSlice";
import userSlice from "../features/userSlice";
import rolesSlice from "../features/roleSlice";
import categorySlice from "../features/categorySlice";
import servicesSlice from "../features/servicesSlice";
import callbackSlice from "../features/callbackSlice";
import enquiryForm from "../features/enquirySlice";
import contactUsSlice from "../features/contactUsSlice";
import drivenformSlice from "../features/drivenformSlice";
import productSlice from "../features/productSlice";
import postcodeSlice from "../features/postcodeSlice";
import areaSlice from "../features/areaSlice";
import quizCategorySlice from "../features/quizCategorySlice";
import quizSlice from "../features/quizSlice";
import dashboardSlice from "../features/dashboardSlice";
import cartSlice from "../features/cartSlice";
import orderSlice from "../features/orderSlice";
import productSpecialSlice from "../features/productSpecialSlice";
import subscriptionSlice from "../features/subscriptionSlice";
import blogSlice from "../features/blogSlice";
import notepadSlice from "../features/notepadSlice";
import userReportsSlice from "../features/userReportsSlice";
import homeContentSlice from "../features/homeContentSlice";
import manualCoursePageSlice from "../features/manualCoursePageSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  cart: cartSlice,
  order: orderSlice,
  user: userSlice,
  roles: rolesSlice,
  category: categorySlice,
  services: servicesSlice,
  callback: callbackSlice,
  enquiryForm: enquiryForm,
  contactForm: contactUsSlice,
  drivenForm: drivenformSlice,
  quiz: quizSlice,
  dashboard: dashboardSlice,
  postcode: postcodeSlice,
  product: productSlice,
  productSpecial: productSpecialSlice,
  area: areaSlice,
  quizCategory: quizCategorySlice,
  subscription: subscriptionSlice,
  blog: blogSlice,
  notepad: notepadSlice,
  userReport: userReportsSlice,
  home: homeContentSlice,
  manualCoursePage: manualCoursePageSlice,
});

export default rootReducer;
