// src/features/course/courseSlice.js
import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const manualcourseSlice = createSlice({
  name: "manualCoursePage",
  initialState: {
    // ============ LIST (admin) ============
    courses: [],
    coursesLoading: false,

    // ============ SINGLE COURSE ============
    course: null,
    courseLoading: false,
  },
  reducers: {
    /* ============================================================
       LIST REDUCERS
       ============================================================ */
    getCoursesSuccess: (state, action) => {
      state.courses = action.payload;
      state.coursesLoading = false;
    },
    getCoursesFailure: (state) => {
      state.courses = [];
      state.coursesLoading = false;
    },
    setCoursesLoading: (state) => {
      state.coursesLoading = true;
    },

    /* ============================================================
       SINGLE COURSE REDUCERS
       ============================================================ */
    getCourseSuccess: (state, action) => {
      state.course = action.payload;
      state.courseLoading = false;
    },
    getCourseFailure: (state) => {
      state.course = null;
      state.courseLoading = false;
    },
    setCourseLoading: (state) => {
      state.courseLoading = true;
    },
    createCourseSuccess: (state, action) => {
      state.course = action.payload;
      state.courseLoading = false;
      state.courses.unshift(action.payload);
    },
    createCourseFailure: (state) => {
      state.courseLoading = false;
    },
    updateCourseSuccess: (state, action) => {
      state.course = action.payload;
      state.courseLoading = false;
      state.courses = state.courses.map((c) =>
        c._id === action.payload._id ? action.payload : c,
      );
    },
    updateCourseFailure: (state) => {
      state.courseLoading = false;
    },
    deleteCourseSuccess: (state, action) => {
      state.course = null;
      state.courseLoading = false;
      state.courses = state.courses.filter((c) => c._id !== action.payload);
    },
    deleteCourseFailure: (state) => {
      state.courseLoading = false;
    },
  },
});

/* ============================================================
   THUNKS
   ============================================================ */

// Admin: list all course pages
export const getCourses = () => async (dispatch) => {
  try {
    dispatch(setCoursesLoading());
    const response = await httpHandler.get(`/api/manual-course-page/all-manual`);
    if (response.data.success) {
      dispatch(getCoursesSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getCoursesFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getCoursesFailure());
  }
};

// Public storefront: fetch by slug
export const getCourseBySlug = (slug) => async (dispatch) => {
  try {
    dispatch(setCourseLoading());
    const response = await httpHandler.get(`/api/manual-course-page/slug/${slug}`);
    if (response.data.success) {
      dispatch(getCourseSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getCourseFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getCourseFailure());
  }
};

// Admin: fetch by ID (edit view)
export const getCourseById = (id) => async (dispatch) => {
  try {
    dispatch(setCourseLoading());
    const response = await httpHandler.get(`/api/manual-course-page/all-manual/${id}`);
    if (response.data.success) {
      dispatch(getCourseSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getCourseFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getCourseFailure());
  }
};

export const createCourse = (data, reset, toggleModal) => async (dispatch) => {
  try {
    dispatch(setCourseLoading());
    const response = await httpHandler.post(`/api/manual-course-page/add-course`, data);
    if (response.data.success) {
      reset?.();
      toggleModal?.();
      dispatch(createCourseSuccess(response.data.data));
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
      dispatch(createCourseFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(createCourseFailure());
  }
};

export const updateCourse = (id, data, toggleModal) => async (dispatch) => {
  try {
    dispatch(setCourseLoading());
    const response = await httpHandler.post(
      `/api/manual-course-page/update-course/${id}`,
      data,
    );
    if (response.data.success) {
      toggleModal?.();
      dispatch(updateCourseSuccess(response.data.data));
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
      dispatch(updateCourseFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(updateCourseFailure());
  }
};

export const deleteCourse = (id, onSuccess) => async (dispatch) => {
  try {
    dispatch(setCourseLoading());
    const response = await httpHandler.post(`/api/manual-course-page/delete-course/${id}`);
    if (response.data.success) {
      dispatch(deleteCourseSuccess(id));
      toast.success(response.data.message);
      onSuccess?.();
    } else {
      toast.error(response.data.message);
      dispatch(deleteCourseFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteCourseFailure());
  }
};

export const {
  getCoursesSuccess,
  getCoursesFailure,
  setCoursesLoading,
  getCourseSuccess,
  getCourseFailure,
  setCourseLoading,
  createCourseSuccess,
  createCourseFailure,
  updateCourseSuccess,
  updateCourseFailure,
  deleteCourseSuccess,
  deleteCourseFailure,
} = manualcourseSlice.actions;

export default manualcourseSlice.reducer;
