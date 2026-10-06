import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/httpHandler";
import toast from "react-hot-toast";

const initialState = {
  loading: false,
  error: null,
};

const contactUsSlice = createSlice({
  name: "contact",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(contactUsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(contactUsData.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(contactUsData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const contactUsData = createAsyncThunk(
  "contactForm/contactUsData",
  async ({requestData,reset}, { rejectWithValue }) => {
    try {
      const response = await http.post(`/api/contactForm/contact`, requestData);
     
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



export default contactUsSlice.reducer;
