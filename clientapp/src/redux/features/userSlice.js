import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    usersCount: null,
    loading: false,
    usersList: [],
    user: null,
  },
  reducers: {
    createUserSuccess: (state, action) => {
      const { user, totalCount } = action.payload || {};
      if (user) {
        state.users.push(user);
      }
      if (totalCount !== undefined) {
        state.usersCount = totalCount;
      }
      state.loading = false;
    },
    
    
    createUserFailure: (state, action) => {
      state.loading = false;
    },
    getAllUsersSuccess: (state, action) => {
      state.users = action.payload.users;
      state.usersCount = action.payload.totalCount;
      state.loading = false;
    },
    getAllUsersFailure: (state) => {
      state.loading = false;
    },
    getListUsersSuccess: (state, action) => {
      state.usersList = action.payload;
      state.loading = false;
    },
    getListUsersFailure: (state) => {
      state.usersList = [];
      state.loading = false;
    },
    getUserByIdSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },
    getUserByIdFailure: (state) => {
      state.user = null;
      state.loading = false;
    },
    deleteUserSuccess: (state, action) => {
      const userId = action.payload;
      state.users = state.users.filter((user) => user._id !== userId);
      state.usersCount = state.usersCount - 1;
      state.loading = false;
    },
    deleteUserFailure: (state) => {
      state.loading = false;
    },
    editUserSuccess: (state, action) => {
      const updatedUser = action.payload.user || action.payload;
      const updatedUsers = state.users.map((user) => {
        if (user._id === updatedUser._id) {
          return updatedUser;
        }
        return user;
      });
    
      state.users = updatedUsers;
      state.loading = false;
    },
    
    editUserFailure: (state) => {
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const getAllUsers = (search, page, pagesize) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(
      `/api/account/users?search=${search}&page=${page}&pagesize=${pagesize}`
    );
    if (response.data.success) {
      dispatch(getAllUsersSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getAllUsersFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getAllUsersFailure());
  }
};

export const createUser =
  (data, reset, toggleAddUserModal, statedata) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.post(`/api/account/register`, data);
      if (response.data.success) {
        toast.success(response.data.message);
        reset();
        toggleAddUserModal();
        dispatch(createUserSuccess(response.data.data));
        dispatch(
          getAllUsers(statedata.search, statedata.page, statedata.pageSize)
        );
      } else {
        toast.error(response.data.message);
        dispatch(createUserFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(createUserFailure());
    }
  };

export const getListUsers = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/account/userlist`);
    if (response.data.success) {
      dispatch(getListUsersSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getListUsersFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getListUsersFailure());
  }
};

export const getUserById = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/account/user/${id}`);
    if (response.data.success) {
      dispatch(getUserByIdSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getUserByIdFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getUserByIdFailure());
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.post(`/api/account/delete-user/${id}`);
    if (response.data.success) {
      dispatch(deleteUserSuccess(id));
    } else {
      toast.error(response.data.message);
      dispatch(deleteUserFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteUserFailure());
  }
};

export const editUser = (id, data, toggleEditUserModal) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const response = await httpHandler.post(
      `/api/account/update-user/${id}`,
      data
    );

    if (response.data.success) {
      dispatch(editUserSuccess(response.data.data));
      toast.success(response.data.message);
      toggleEditUserModal();
    } else {
      toast.error(response.data.message);
      dispatch(editUserFailure());
    }
  } catch (error) {
    console.error("Caught API Error: ", error);
    toast.error(error.message);
    dispatch(editUserFailure());
  }
};

export const {
  getAllUsersSuccess,
  getAllUsersFailure,
  createUserSuccess,
  createUserFailure,
  getListUsersSuccess,
  getListUsersFailure,
  getUserByIdSuccess,
  getUserByIdFailure,
  deleteUserSuccess,
  deleteUserFailure,
  editUserSuccess,
  editUserFailure,
  setLoading,
} = userSlice.actions;

export default userSlice.reducer;
