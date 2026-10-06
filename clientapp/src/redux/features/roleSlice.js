import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const roleSlice = createSlice({
    name: "role",
    initialState: {
        roles: [],
        rolesCount: null,
        roleLoading: false,
        rolesList: [],
        role: null,
    },
    reducers: {
        getAllRolesSuccess: (state, action) => {
            state.roles = action.payload.roles;
            state.rolesCount = action.payload.totalCount;
            state.roleLoading = false;
        },
        getAllRolesFailure: (state, action) => {
            state.roles = [];
            state.rolesCount = null;
            state.roleLoading = false;
        },
        createRoleSuccess: (state, action) => { 
            state.roles.push(action.payload.role);
            state.rolesCount = action.payload.totalCount;
            state.roleLoading = false;
        },
        createRoleFailure: (state, action) => {
            state.roleLoading = false;
        },
        editRoleSuccess: (state, action) => {
            const updatedRole = action.payload.role;
            const updatedRoles = state.roles.map(role => {
                if (role._id === updatedRole._id) {
                    return updatedRole;
                }
                return role;
            });

            state.roles = updatedRoles;
            state.roleLoading = false;
        },
        editRoleFailure: (state, action) => {
            state.roleLoading = false;
        },
        getListRolesSuccess: (state, action) => {
            state.rolesList = action.payload;
            state.roleLoading = false;
        },
        getListRolesFailure: (state, action) => {
            state.rolesList = [];
            state.roleLoading = false;
        },
        getRoleByIdSuccess: (state, action) => {
            state.role = action.payload;
            state.roleLoading = false;
        },
        getRoleByIdFailure: (state, action) => {
            state.role = null;
            state.roleLoading = false;
        },
        deleteRoleSuccess: (state, action) => {
            const roleId = action.payload;
            state.roles = state.roles.filter((role) => role._id !== roleId);
            state.rolesCount = state.rolesCount - 1;
            state.roleLoading = false;
        },
        deleteRoleFailure: (state, action) => {
            state.roleLoading = false;
        },
        setLoading: (state, action) => {
            state.roleLoading = true;
        },
    },
});

export const getAllRoles = (search, page, pagesize) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/roles/all-roles?search=${search}&page=${page}&pagesize=${pagesize}`
        );
        if (response.data.success) {
            dispatch(getAllRolesSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getAllRolesFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getAllRolesFailure());
    }
};
export const createRole =
    (data, reset, toggleAddRoleModal) => async (dispatch) => {
        try {
            dispatch(setLoading());
            const response = await httpHandler.post(`/api/roles/add-role`, data);
            if (response.data.success) {
                reset();
                dispatch(createRoleSuccess(response.data.data));
                toast.success(response.data.message);
                toggleAddRoleModal();
            } else {
                toast.error(response.data.message);
                dispatch(createRoleFailure());
            }
        } catch (error) {
            toast.error(error.message);
            dispatch(createRoleFailure());
        }
    };

export const editRole = (id, data, toggleEditRoleModal) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/roles/update-role/${id}`, data);
        if (response.data.success) {
            dispatch(editRoleSuccess(response.data.data));
            toast.success(response.data.message);
            toggleEditRoleModal();
        } else {
            toast.error(response.data.message);
            dispatch(editRoleFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(editRoleFailure());
    }
};

export const getListRoles = () => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/roles/rolelist`);
        if (response.data.success) {
            dispatch(getListRolesSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getListRolesFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getListRolesFailure());
    }
};

export const getRoleById = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/roles/role/${id}`);
        if (response.data.success) {
            dispatch(getRoleByIdSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getRoleByIdFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getRoleByIdFailure());
    }
};

export const deleteRole = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/roles/delete-role/${id}`);
        if (response.data.success) {
            dispatch(deleteRoleSuccess(id));
        } else {
            toast.error(response.data.message);
            dispatch(deleteRoleFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(deleteRoleFailure());
    }
};

export const { getAllRolesSuccess, getAllRolesFailure, createRoleSuccess, createRoleFailure, editRoleSuccess, editRoleFailure,
    getListRolesSuccess, getListRolesFailure, getRoleByIdSuccess, getRoleByIdFailure, deleteRoleSuccess, deleteRoleFailure,
    setLoading } =
    roleSlice.actions;
export default roleSlice.reducer;
