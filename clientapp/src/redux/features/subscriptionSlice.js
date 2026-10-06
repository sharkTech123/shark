import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

// Thunks
export const fetchPlans = createAsyncThunk(
  "subscription/fetchPlans",
  async () => {
    const response = await httpHandler.get("/api/subscription/plans");
    localStorage.removeItem("subsdiscountedPrice");
    return response.data;
  }
);
export const fetchUserSubscriptions = createAsyncThunk(
  "subscription/fetchUserSubscriptions",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await httpHandler.get(
        `/api/subscription/get-usersubs/${userId}`
      );
      // Save the user subscription to local storage
      localStorage.setItem("userSubscription", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createUserSubscription = createAsyncThunk(
  "subscription/createUserSubscription",
  async (subscriptionData, { rejectWithValue }) => {
    try {
      const response = await httpHandler.post(
        "/api/subscription/create-usersubs",
        subscriptionData
      );

      // Show success toast
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      // Show error toast
      toast.error(` ${error.response.data.message || error.message}`);
      return rejectWithValue(error.response.data);
    }
  }
);
export const createAutoUserSubscription = createAsyncThunk(
  "subscription/createAutoUserSubscription",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await httpHandler.post(
        "/api/subscription/create-subscription",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createPayment = createAsyncThunk(
  "subscription/createPayment",
  async ({ subscriptionId, price }) => {
    const response = await httpHandler.post(
      "/api/subscription/create-payment",
      { subscriptionId, price }
    );

    console.log("jdsklzhdnskadhznaskj", price);
    return response.data;
  }
);

export const confirmPayment = createAsyncThunk(
  "subscription/confirmPayment",
  async ({ orderId, userId, subscriptionId }) => {
    const response = await httpHandler.post(
      "/api/subscription/confirm-payment",
      { orderId, userId, subscriptionId }
    );
    return response.data;
  }
);

export const checkTrialEligibility = createAsyncThunk(
  "subscription/checkTrialEligibility",
  async (userId) => {
    const response = await httpHandler.get(
      `/api/subscription/checkTrial/${userId}`
    );
    return response.data;
  }
);

export const applyCouponCode = createAsyncThunk(
  "subscription/applyCouponCode",
  async ({ userId, planId, couponCode }, { rejectWithValue }) => {
    try {
      const response = await httpHandler.post(
        "/api/subscription/apply-coupon",
        { userId, planId, couponCode }
      );
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      // Show error toast
      toast.error(` ${error.response.data.message || error.message}`);
      return rejectWithValue(error.response.data);
    }
  }
);
// ////////////////////////////////////////////////////////
export const pdiApplyCouponCode = createAsyncThunk(
  "subscription/pdiApplyCouponCode",
  async ({ userId, couponCode }, { rejectWithValue }) => {
    try {
      const response = await httpHandler.post(
        "/api/subscription/pdiApply-coupon",
        { userId, couponCode }
      );
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      // Show error toast
      toast.error(` ${error.response.data.message || error.message}`);
      return rejectWithValue(error.response.data);
    }
  }
);
// ///////////////////////////////////////////////////////////////////////
export const pdiPartOneApplyCouponCode = createAsyncThunk(
  "subscription/pdiPartOneApplyCouponCode",
  async ({ userId, planId, couponCode }, { rejectWithValue }) => {
    try {
      const response = await httpHandler.post(
        "/api/subscription/pdiPartOneApply-coupon",
        { userId, planId, couponCode }
      );

      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      // Show error toast
      toast.error(` ${error.response.data.message || error.message}`);
      return rejectWithValue(error.response.data);
    }
  }
);
// ////////////////////////////////////////////////////////////////////////////
export const pdiPartTwoApplyCouponCode = createAsyncThunk(
  "subscription/pdiPartTwoApplyCouponCode",
  async ({ userId, couponCode }, { rejectWithValue }) => {
    try {
      const response = await httpHandler.post(
        "/api/subscription/pdiPartTwoApply-coupon",
        { userId, couponCode }
      );
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      // Show error toast
      toast.error(` ${error.response.data.message || error.message}`);
      return rejectWithValue(error.response.data);
    }
  }
);
// ///////////////////////////////////////////////////////////////////////////
export const pdiPartThreeApplyCouponCode = createAsyncThunk(
  "subscription/pdiPartThreeApplyCouponCode",
  async ({ userId, couponCode }, { rejectWithValue }) => {
    try {
      const response = await httpHandler.post(
        "/api/subscription/pdiPartThreeApply-coupon",
        { userId, couponCode }
      );
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      // Show error toast
      toast.error(` ${error.response.data.message || error.message}`);
      return rejectWithValue(error.response.data);
    }
  }
);
// /////////////////////////////////////////////////////

// Slice
const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: {
    plans: [],
    userSubscription: {},
    subsdiscountedPrice: localStorage.getItem("subsdiscountedPrice")
      ? JSON.parse(localStorage.getItem("subsdiscountedPrice"))
      : null,
    couponMessage: "",
    loading: false,
    error: null,
  },
  reducers: {
    removeSubs: (state) => {
      localStorage.removeItem("userSubscription");
      state.userSubscription = {};
    },
    resetDiscountedPrice: (state) => {
      state.subsdiscountedPrice = null;
      localStorage.removeItem("subsdiscountedPrice");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPlans.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.plans = action.payload;
      })
      .addCase(fetchPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createPayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.orderId = action.payload;
      })
      .addCase(createPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(confirmPayment.pending, (state) => {
        state.loading = true;
      })
      .addCase(confirmPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.userSubscription = action.payload;
      })
      .addCase(confirmPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserSubscriptions.fulfilled, (state, action) => {
        console.log("User subscriptions fetched:", action.payload);
        state.userSubscription = action.payload;
      })
      .addCase(fetchUserSubscriptions.rejected, (state, action) => {
        console.error("Failed to fetch user subscriptions:", action.payload);
      })
      .addCase(applyCouponCode.fulfilled, (state, action) => {
        state.couponMessage = action.payload.message; // Store the success message
        state.subsdiscountedPrice = action.payload.data;
      })
      .addCase(applyCouponCode.rejected, (state, action) => {
        state.couponMessage =
          action.payload?.message || "Coupon application failed.";
        state.subsdiscountedPrice = null;
      })
      .addCase(pdiApplyCouponCode.fulfilled, (state, action) => {
        state.couponMessage = action.payload.message; // Store the success message
      })
      .addCase(pdiApplyCouponCode.rejected, (state, action) => {
        state.couponMessage =
          action.payload?.message || "Coupon application failed.";
      })
      .addCase(pdiPartOneApplyCouponCode.pending, (state) => {
        state.loading = true;
        state.couponMessage = "";
      })
      .addCase(pdiPartOneApplyCouponCode.fulfilled, (state, action) => {
        state.loading = false;
        state.subsdiscountedPrice = action.payload.data;
      })

      .addCase(pdiPartOneApplyCouponCode.rejected, (state, action) => {
        state.loading = false;
        state.isCouponValid = false;
        state.subsdiscountedPrice = null;
      });
  },
});

// Export actions and reducer
export const { removeSubs, resetDiscountedPrice } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
