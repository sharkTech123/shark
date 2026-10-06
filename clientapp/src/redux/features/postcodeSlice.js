import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const postcodeSlice = createSlice({
  name: "postcode",
  initialState: {
    postcodes: [],
    postcodesCount: null,
    loading: false,
    postcodesList: [],
    postcode: null,
  },
  reducers: {
    getAllPostcodesSuccess: (state, action) => {
      state.postcodes = action.payload.postcodes;
      state.postcodesCount = action.payload.totalCount;
      state.loading = false;
    },
    getAllPostcodesFailure: (state) => {
      state.postcodes = [];
      state.postcodesCount = null;
      state.loading = false;
    },
    createPostcodeSuccess: (state, action) => {
      state.postcodes.push(action.payload.postcode);
      state.postcodesCount = action.payload.totalCount;
      state.loading = false;
    },
    createPostcodeFailure: (state) => {
      state.loading = false;
    },
    editPostcodeSuccess: (state, action) => {
      const updatedPostcode = action.payload.postcode;
      state.postcodes = state.postcodes.map((postcode) =>
        postcode._id === updatedPostcode._id ? updatedPostcode : postcode
      );
      state.loading = false;
    },
    editPostcodeFailure: (state) => {
      state.loading = false;
    },
    getListPostcodeSuccess: (state, action) => {
      state.postcodesList = action.payload;
      state.loading = false;
    },
    getListPostcodeFailure: (state) => {
      state.postcodesList = [];
      state.loading = false;
    },
    getPostcodeByIdSuccess: (state, action) => {
      state.postcode = action.payload;
      state.loading = false;
    },
    getPostcodeByIdFailure: (state) => {
      state.postcode = null;
      state.loading = false;
    },
    deletePostcodeSuccess: (state, action) => {
      const postcodeId = action.payload;
      state.postcodes = state.postcodes.filter(
        (postcode) => postcode._id !== postcodeId
      );
      state.postcodesCount = state.postcodesCount - 1;
      state.loading = false;
    },
    deletePostcodeFailure: (state) => {
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const getAllPostcodes = (search, page, pagesize) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(
      `/api/product/all-postcodes?search=${search}&page=${page}&pagesize=${pagesize}`
    );
    if (response.data.success) {
      dispatch(getAllPostcodesSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getAllPostcodesFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getAllPostcodesFailure());
  }
};

export const createPostcode =
  (data, reset, toggleAddPostcodeModal) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.post(
        `/api/product/add-postcode`,
        data
      );
      if (response.data.success) {
        toast.success(response.data.message);
        reset();
        toggleAddPostcodeModal();
        dispatch(createPostcodeSuccess(response.data.data));
      } else {
        toast.error(response.data.message);
        dispatch(createPostcodeFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(createPostcodeFailure());
    }
  };

export const editPostcode =
  (id, data, toggleEditPostcodeModal) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.post(
        `/api/product/update-postcode/${id}`,
        data
      );
      if (response.data.success) {
        dispatch(editPostcodeSuccess(response.data.data));
        toast.success(response.data.message);
        toggleEditPostcodeModal();
      } else {
        toast.error(response.data.message);
        dispatch(editPostcodeFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(editPostcodeFailure());
    }
  };

export const getListPostcodes = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/product/postcodelist`);
    if (response.data.success) {
      dispatch(getListPostcodeSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getListPostcodeFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getListPostcodeFailure());
  }
};

export const getPostcodeById = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/product/postcode/${id}`);
    if (response.data.success) {
      dispatch(getPostcodeByIdSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getPostcodeByIdFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getPostcodeByIdFailure());
  }
};

export const deletePostcode = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.post(
      `/api/product/delete-postcode/${id}`
    );
    if (response.data.success) {
      dispatch(deletePostcodeSuccess(id));
    } else {
      toast.error(response.data.message);
      dispatch(deletePostcodeFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deletePostcodeFailure());
  }
};

export const {
  getAllPostcodesSuccess,
  getAllPostcodesFailure,
  createPostcodeSuccess,
  createPostcodeFailure,
  getListPostcodeSuccess,
  getListPostcodeFailure,
  editPostcodeSuccess,
  editPostcodeFailure,
  getPostcodeByIdSuccess,
  getPostcodeByIdFailure,
  deletePostcodeSuccess,
  deletePostcodeFailure,
  setLoading,
} = postcodeSlice.actions;

export default postcodeSlice.reducer;
