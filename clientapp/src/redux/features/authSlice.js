import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import http from "../../utils/httpHandler";
import toast from "react-hot-toast";
import { ROLES } from "../../constants";
import {
  removeSubs,
  fetchUserSubscriptions,
} from "../features/subscriptionSlice";
import { removeCartItems } from "./cartSlice";
const initialState = {
  loading: false,
  userDetails: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    UserDetails: (state, action) => {
      state.userDetails = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state) => {
        state.loading = false;
      })
      //////////////////////////////////////
      .addCase(completePasswordReset.pending, (state) => {
        state.loading = true;
      })
      .addCase(completePasswordReset.fulfilled, (state, action) => {
        state.loading = false;
        toast.success("Password reset successfully.");
      })
      .addCase(completePasswordReset.rejected, (state) => {
        state.loading = false;
        toast.error("Failed to reset password.");
      });
  },
});
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ requestData, reset, navigate }, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(`/api/account/register`, requestData);
      const resultData = response.data;

      if (!resultData.success) {
        toast.error(
          resultData.msg || "Something went wrong during registration."
        );
        return rejectWithValue(resultData.msg || "Registration failed");
      } else {
        toast.success(resultData.msg || "Registered Successfully");
        reset();
        dispatch(
          loginUser({
            loginData: {
              usernameOremail: requestData.email,
              password: requestData.password,
            },
            navigate,
          })
        );
        navigate("/thanks");
        return resultData;
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ loginData, navigate }, { rejectWithValue, dispatch }) => {
    try {
      const response = await http.post(`/api/account/login`, loginData);
      const data = response.data;
      if (data.success) {
        const user = data.data.user;
        dispatch(UserDetails(user));
        localStorage.setItem("user", JSON.stringify(user));
        toast.success(data.message || "Logged IN Successfully");
        dispatch(fetchUserSubscriptions(user._id));
        const decodedToken = jwtDecode(user.token);
        const expirationTime = decodedToken.exp * 1000 - Date.now();
        if (expirationTime <= 0) {
          console.warn("Token has already expired, logging out immediately.");
          dispatch(logoutUser());

          navigate("/login");
        } else {
          dispatch(autoLogoutUser(expirationTime, navigate));
        }

        if (user.role === ROLES.ADMIN) {
          navigate("/admin/dashboard");
        } else {
          navigate(-2);
        }
      } else {
        toast.error(data.message || "Something went wrong");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.status === 500) {
        toast.error("Username or password is incorrect");
      } else {
        toast.error(error.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      localStorage.removeItem("user");
      dispatch(UserDetails({}));
      dispatch(removeCartItems({}));
      dispatch(removeSubs({}));
      // dispatch(removeSubs());
      toast.success("Logged Out Successfully");
      return "LoggedOut Successfully";
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const autoLogoutUser = (expiresIn, navigate) => async (dispatch) => {
  try {
    setTimeout(() => {
      dispatch(logoutUser());
      navigate("/login");
    }, expiresIn);
  } catch (error) {
    console.error("Error occurred:", error);
  }
};
// ///////////////////////////////////////////////////////
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (email, { rejectWithValue, dispatch }) => {
    try {
      console.log("Sending reset request for:", email); // Log to confirm email is passed

      const response = await http.post("/api/account/forgot-password", {
        email,
      });
      console.log("Response:", response); // Log the response

      const data = response.data;
      if (data.success) {
        toast.success("Password reset link sent to your email.");
      } else {
        toast.error(data.message || "Error sending reset link.");
      }

      return data;
    } catch (error) {
      toast.error("Something went wrong, please try again.");
      return rejectWithValue(error.message);
    }
  }
);
export const completePasswordReset = createAsyncThunk(
  "auth/completePasswordReset",
  async ({ resetToken, newPassword, navigate }, { rejectWithValue }) => {
    try {
      const response = await http.post("/api/account/reset-password", {
        resetToken,
        newPassword,
      });

      const data = response.data;
      if (data.success) {
        toast.success("Password reset successfully.");
        navigate("/");
      } else {
        toast.error(data.message || "Failed to reset password.");
      }

      return data;
    } catch (error) {
      toast.error("Something went wrong during the password reset.");
      return rejectWithValue(error.message);
    }
  }
);

export const { UserDetails } = authSlice.actions;

export default authSlice.reducer;
