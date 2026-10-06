import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    Quizcards: [],
    cards: [],
    plan: [],
    roleLoading: false,
    currentplan: "",
  },
  reducers: {
    getDashboardSuccess: (state, action) => {
      state.cards = action.payload;
      state.roleLoading = false;
    },
    getDashboardFailure: (state, action) => {
      state.cards = {};
      state.roleLoading = false;
    },
    getPlanSuccess: (state, action) => {
      state.plan = action.payload;
      state.roleLoading = false;
    },
    getPlanFailure: (state, action) => {
      state.plan = [];
      state.roleLoading = false;
    },
    getCurrentPlanSuccess: (state, action) => {
      state.currentplan = action.payload;
      state.roleLoading = false;
    },
    getCurrentPlanFailure: (state, action) => {
      state.currentplan = "";
      state.roleLoading = false;
    },
    getQuizDashboardSuccess: (state, action) => {
      state.Quizcards = action.payload.quiz;
      state.roleLoading = false;
    },
    getQuizDashboardFailure: (state, action) => {
      state.Quizcards = [];
      state.roleLoading = false;
    },
    setLoading: (state, action) => {
      state.roleLoading = true;
    },
  },
});

export const getMyDashboard = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/dashboard/getDashboardCards`);
    if (response.data.success) {
      dispatch(getDashboardSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getDashboardFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getDashboardFailure());
  }
};

export const getMySubscription =
  (cb = () => {}) =>
  async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.get(`/api/dashboard/getMySubsciption`);
      if (response.data.success) {
        const respData = response.data.data;
        if (respData.isSubscription) {
          // Handle subscription logic here
        } else {
          cb(); // Call the callback function when there's no subscription
        }
      } else {
        toast.error(response.data.message);
        dispatch(getCurrentPlanFailure());
        cb(); // Always call callback on failure
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(getCurrentPlanFailure());
    }
  };
export const checkOutMySubscription = (data, cb) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.post(
      `/api/dashboard/CheckoutMySubsciption`,
      data
    );

    if (response.data.success) {
      let respData = response.data.data;

      if (respData.isSubscription) {
        // Free Trial specific message
        if (respData.subscriptionType === "Free Trial") {
          toast.success("Free Trial activated successfully!");
        } else {
          // For other subscription types
          toast.success(response.data.message);
        }

        // Update current plan in Redux state
        dispatch(getCurrentPlanSuccess(respData.subscriptionType));

        // Callback after subscription is handled
        cb();
      } else {
        // Show error if no subscription was activated
        toast.error(response.data.message);
      }
    } else {
      // If the response itself indicates failure
      toast.error(response.data.message);
    }
  } catch (error) {
    // On request failure (e.g., network issue)
    toast.error(error.message);
    dispatch(getDashboardFailure());
  }
};

export const getMySubscriptionType = (setPlans, cb) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(
      `/api/dashboard/getMySubscriptionType`
    );
    if (response.data.success) {
      let respData = response.data.data;

      dispatch(getCurrentPlanSuccess(respData?.subscriptionType || ""));
      // Check if payment was completed before showing subscription options
      if (respData.paymentCompleted) {
        dispatch(
          getPlanSuccess(["Standard Subscription", "Supported Subscription"])
        );
      } else {
        // Only show free trial if payment is not completed
        setPlans((prev) => {
          prev[1].view = false; // Hide Standard Subscription
          prev[2].view = false; // Hide Supported Subscription
          return prev;
        });
        dispatch(getPlanSuccess(["Free Trial"]));
      }
      cb(); // Callback for further actions
    } else {
      dispatch(getCurrentPlanFailure());
      toast.error(response.data.message);
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getDashboardFailure());
  }
};

export const getMyQuizCategory = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/dashboard/getCategoryCards`);
    if (response.data.success) {
      dispatch(getQuizDashboardSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getQuizDashboardFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getDashboardFailure());
  }
};

export const getMyQuizModule = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    // const response = await httpHandler.get(
    //     `/api/dashboard/getModuleCards/${id}`
    // );
    const response = await httpHandler.get(
      `/api/dashboard/getQuenameCards/${id}`
    );
    if (response.data.success) {
      dispatch(getQuizDashboardSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getQuizDashboardFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getDashboardFailure());
  }
};

export const {
  getDashboardSuccess,
  getDashboardFailure,
  getPlanSuccess,
  getPlanFailure,
  getCurrentPlanSuccess,
  getCurrentPlanFailure,
  getQuizDashboardSuccess,
  getQuizDashboardFailure,
  setLoading,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
