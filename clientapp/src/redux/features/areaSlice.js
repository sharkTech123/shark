import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const areaSlice = createSlice({
    name: "area",
    initialState: {
        areas: [],
        areasCount: null,
        loading: false,
        areasList: [],
        area: null,
    },
    reducers: {
        getAllAreasSuccess: (state, action) => {
            state.areas = action.payload.areas;
            state.areasCount = action.payload.totalCount;
            state.loading = false;
        },
        getAllAreasFailure: (state) => {
            state.areas = [];
            state.areasCount = null;
            state.loading = false;
        },
        createAreaSuccess: (state, action) => { 
            state.areas.push(action.payload.area);
            state.areasCount = action.payload.totalCount;
            state.loading = false;
        },
        createAreaFailure: (state) => {
            state.loading = false;
        },
        editAreaSuccess: (state, action) => {
            const updatedArea = action.payload.area;
            state.areas = state.areas.map(area => area._id === updatedArea._id ? updatedArea : area);
            state.loading = false;
        },
        editAreaFailure: (state) => {
            state.loading = false;
        },
        getListAreaSuccess: (state, action) => {
            state.areasList = action.payload;
            state.loading = false;
        },
        getListAreaFailure: (state) => {
            state.areasList = [];
            state.loading = false;
        },
        getAreaByIdSuccess: (state, action) => {
            state.area = action.payload;
            state.loading = false;
        },
        getAreaByIdFailure: (state) => {
            state.area = null;
            state.loading = false;
        },
        deleteAreaSuccess: (state, action) => {
            const areaId = action.payload;
            state.areas = state.areas.filter(area => area._id !== areaId);
            state.areasCount = state.areasCount - 1;
            state.loading = false;
        },
        deleteAreaFailure: (state) => {
            state.loading = false;
        },
        setLoading: (state) => {
            state.loading = true;
        },
    },
});

export const getAllAreas = (search, page, pagesize) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/product/all-areas?search=${search}&page=${page}&pagesize=${pagesize}`
        );
        if (response.data.success) {
            dispatch(getAllAreasSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getAllAreasFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getAllAreasFailure());
    }
};

export const createArea =
    (data, reset, toggleAddAreaModal) => async (dispatch) => {
        try {
            dispatch(setLoading());
            const response = await httpHandler.post(`/api/product/add-area`, data);
            if (response.data.success) {
                toast.success(response.data.message);
                reset();
                toggleAddAreaModal();
                dispatch(createAreaSuccess(response.data.data));
                
                
            } else {
                toast.error(response.data.message);
                dispatch(createAreaFailure());
            }
        } catch (error) {
            toast.error(error.message);
            dispatch(createAreaFailure());
        }
    };

export const editArea = (id, data, toggleEditAreaModal) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/product/update-area/${id}`, data);
        if (response.data.success) {
            dispatch(editAreaSuccess(response.data.data));
            toast.success(response.data.message);
            toggleEditAreaModal();
        } else {
            toast.error(response.data.message);
            dispatch(editAreaFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(editAreaFailure());
    }
};

export const getListAreas = () => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/product/arealist`);
        if (response.data.success) {
            dispatch(getListAreaSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getListAreaFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getListAreaFailure());
    }
};

export const getAreaById = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/product/area/${id}`);
        if (response.data.success) {
            dispatch(getAreaByIdSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getAreaByIdFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getAreaByIdFailure());
    }
};

export const deleteArea = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/product/delete-area/${id}`);
        if (response.data.success) {
            dispatch(deleteAreaSuccess(id));
        } else {
            toast.error(response.data.message);
            dispatch(deleteAreaFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(deleteAreaFailure());
    }
};

export const {
    getAllAreasSuccess,
    getAllAreasFailure,
    createAreaSuccess,
    createAreaFailure,
    getListAreaSuccess,
    getListAreaFailure,
    editAreaSuccess,
    editAreaFailure,
    getAreaByIdSuccess,
    getAreaByIdFailure,
    deleteAreaSuccess,
    deleteAreaFailure,
    setLoading
} = areaSlice.actions;

export default areaSlice.reducer;
