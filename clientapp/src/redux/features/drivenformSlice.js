import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/httpHandler";
import toast from "react-hot-toast";

const initialState = {
  loading: false,
  error: null,
};

const drivenformSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(drivenFormData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(drivenFormData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(drivenFormData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const drivenFormData = createAsyncThunk(
  "locationForm/drivenFormData",
  async ({requestData,reset}, { rejectWithValue }) => {
    try {
      const response = await http.post(
        `/api/callbackForm/callback`,
        requestData
      );
    
      if (response.data.success) {
        toast.success(response.data.message || "submitted Successfully");
        reset();
      } else {
        toast.error(response.data.message || "something went wrong");
      }
    } catch (error) {
      toast.error("something went wrong");
      return rejectWithValue(error.message);
    }
  }
);

export default drivenformSlice.reducer;
