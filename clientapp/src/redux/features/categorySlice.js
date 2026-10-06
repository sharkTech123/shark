import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    categoriesCount: null,
    loading: false,
    categoriesList: [],
    category: null,
  },
  reducers: {
    getAllCategoriesSuccess: (state, action) => {
      state.categories = action.payload.categories;
      state.categoriesCount = action.payload.totalCount;
      state.loading = false;
    },
    getAllCategoriesFailure: (state) => {
      state.categories = [];
      state.categoriesCount = null;
      state.loading = false;
    },
    createCategorySuccess: (state, action) => {
      state.categories.push(action.payload.category);
      state.categoriesCount = action.payload.totalCount;
      state.loading = false;
    },
    createCategoryFailure: (state) => {
      state.loading = false;
    },
    editCategorySuccess: (state, action) => {
      const updatedCategory = action.payload.category;
      state.categories = state.categories.map((category) =>
        category._id === updatedCategory._id ? updatedCategory : category
      );
      state.loading = false;
    },
    editCategoryFailure: (state) => {
      state.loading = false;
    },
    getListCategorySuccess: (state, action) => {
      state.categoriesList = action.payload;
      state.loading = false;
    },
    getListCategoryFailure: (state) => {
      state.categoriesList = [];
      state.loading = false;
    },
    getCategoryByIdSuccess: (state, action) => {
      state.category = action.payload;
      state.loading = false;
    },
    getCategoryByIdFailure: (state) => {
      state.category = null;
      state.loading = false;
    },
    deleteCategorySuccess: (state, action) => {
      const categoryId = action.payload;
      state.categories = state.categories.filter(
        (category) => category._id !== categoryId
      );
      state.categoriesCount = state.categoriesCount - 1;
      state.loading = false;
    },
    deleteCategoryFailure: (state) => {
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const getAllCategories =
  (search, page, pagesize) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.get(
        `/api/product/all-categories?search=${search}&page=${page}&pagesize=${pagesize}`
      );
      if (response.data.success) {
        dispatch(getAllCategoriesSuccess(response.data.data));
      } else {
        toast.error(response.data.message);
        dispatch(getAllCategoriesFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(getAllCategoriesFailure());
    }
  };

export const createCategory =
  (data, reset, toggleAddCategoryModal) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.post(
        `/api/product/add-category`,
        data
      );
      if (response.data.success) {
        toast.success(response.data.message);
        reset();
        toggleAddCategoryModal();
        dispatch(createCategorySuccess(response.data.data));
      } else {
        toast.error(response.data.message);
        dispatch(createCategoryFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(createCategoryFailure());
    }
  };

export const editCategory =
  (id, data, toggleEditCategoryModal) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.post(
        `/api/product/update-category/${id}`,
        data
      );
      if (response.data.success) {
        dispatch(editCategorySuccess(response.data.data));
        toast.success(response.data.message);
        toggleEditCategoryModal();
      } else {
        toast.error(response.data.message);
        dispatch(editCategoryFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(editCategoryFailure());
    }
  };

export const getListCategories = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/product/categorylist`);
    if (response.data.success) {
      dispatch(getListCategorySuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getListCategoryFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getListCategoryFailure());
  }
};

export const getCategoryById = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/product/category/${id}`);
    if (response.data.success) {
      dispatch(getCategoryByIdSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getCategoryByIdFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getCategoryByIdFailure());
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.post(
      `/api/product/delete-category/${id}`
    );
    if (response.data.success) {
      dispatch(deleteCategorySuccess(id));
    } else {
      toast.error(response.data.message);
      dispatch(deleteCategoryFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteCategoryFailure());
  }
};

export const {
  getAllCategoriesSuccess,
  getAllCategoriesFailure,
  createCategorySuccess,
  createCategoryFailure,
  getListCategorySuccess,
  getListCategoryFailure,
  editCategorySuccess,
  editCategoryFailure,
  getCategoryByIdSuccess,
  getCategoryByIdFailure,
  deleteCategorySuccess,
  deleteCategoryFailure,
  setLoading,
} = categorySlice.actions;

export default categorySlice.reducer;
