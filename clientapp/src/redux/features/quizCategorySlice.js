import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const quizCategorySlice = createSlice({
    name: "quizCategory",
    initialState: {
        quizCategories: [],
        quizCategoryModule:[],
        quizCategoriesCount: null,
        loading: false,
        quizCategoriesList: [],
        quizCategory: null,
        quizOneCategories:{}
    },
    reducers: {
        getAllQuizCategoriesSuccess: (state, action) => {
            state.quizCategories = action.payload.quiz;
            state.quizCategoriesCount = action.payload.totalCount;
            state.loading = false;
        },
        getAllQuizCategoriesFailure: (state) => {
            state.quizCategories = [];
            state.quizCategoriesCount = null;
            state.loading = false;
        },
        getQuizCategoriesSuccess: (state, action) => {
            state.quizOneCategories = action.payload;
            state.quizCategoriesCount = action.payload.totalCount;
            state.loading = false;
        },
        getQuizCategoriesFailure: (state) => {
            state.quizOneCategories = {};
            state.quizCategoriesCount = null;
            state.loading = false;
        },
        
        getQuizCategoriesSuccess: (state, action) => {
            state.quizCategories = action.payload.quiz;
            state.quizCategoriesCount = action.payload.totalCount;
            state.loading = false;
        },
        getQuizCategoriesFailure: (state) => {
            state.quizCategories = [];
            state.quizCategoriesCount = null;
            state.loading = false;
        },
        createQuizCategorySuccess: (state, action) => { 
            // state.quizCategories.push(action.payload.quizCategory);
            // state.quizCategoriesCount = action.payload.totalCount;
            state.loading = false;
        },
        createQuizCategoryFailure: (state) => {
            state.loading = false;
        },
        editQuizCategorySuccess: (state, action) => {
            // const updatedQuizCategory = action.payload.quizCategory;
            // state.quizCategories = state.quizCategories.map(quizCategory => quizCategory._id === updatedQuizCategory._id ? updatedQuizCategory : quizCategory);
            state.loading = false;
        },
        editQuizCategoryFailure: (state) => {
            state.loading = false;
        },
        getListQuizCategorySuccess: (state, action) => {
            state.quizCategoriesList = action.payload;
            state.loading = false;
        },
        getListQuizCategoryFailure: (state) => {
            state.quizCategoriesList = [];
            state.loading = false;
        },
        getQuizCategoryByIdSuccess: (state, action) => {
            state.quizCategory = action.payload;
            state.loading = false;
        },
        getQuizCategoryByIdFailure: (state) => {
            state.quizCategory = null;
            state.loading = false;
        },
        getQuizCategoryModuleByIdSuccess: (state, action) => {
            state.quizCategoryModule = action.payload;
            state.loading = false;
        },
        getQuizCategoryModuleByIdFailure: (state) => {
            state.quizCategoryModule = [];
            state.loading = false;
        },
        deleteQuizCategorySuccess: (state, action) => {
            const quizCategoryId = action.payload;
            state.quizCategories = state.quizCategories.filter(quizCategory => quizCategory._id !== quizCategoryId);
            state.quizCategoriesCount = state.quizCategoriesCount - 1;
            state.loading = false;
        },
        deleteQuizCategoryFailure: (state) => {
            state.loading = false;
        },
        setLoading: (state) => {
            state.loading = true;
        },
    },
});

export const getAllQuizCategories = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/quiz/getQuizCategory/${id}`
        );
        if (response.data.success) {
            dispatch(getAllQuizCategoriesSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getAllQuizCategoriesFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getAllQuizCategoriesFailure());
    }
};



export const getQuizCategories = (search, page, pagesize) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/quiz/getQuizCategory?search=${search}&page=${page}&pagesize=${pagesize}`
        );
        if (response.data.success) {
            dispatch(getQuizCategoriesSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getQuizCategoriesFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getQuizCategoriesFailure());
    }
};



export const createQuizCategory = (data, toggleAddQuizCategoryModal,state) => async (dispatch) => {
        try {
            dispatch(setLoading());
            const response = await httpHandler.post(`/api/quiz/addQuizCategory`, data);
            if (response.data.success) {
                toast.success(response.data.message);
                toggleAddQuizCategoryModal();
                dispatch(createQuizCategorySuccess(response.data.data));
                dispatch(getAllQuizCategories(state.search, state.page, state.pageSize))
            } else {
                toast.error(response.data.message);
                dispatch(createQuizCategoryFailure());
            }
        } catch (error) {
            toast.error(error.message);
            dispatch(createQuizCategoryFailure());
        }
    };

export const editQuizCategory = (id, data, toggleEditQuizCategoryModal,state) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/quiz/updateQuizCategory/${id}`, data);
        if (response.data.success) {
            dispatch(editQuizCategorySuccess(response.data.data));
            toast.success(response.data.message);
            toggleEditQuizCategoryModal();
            dispatch(getAllQuizCategories(state.search, state.page, state.pageSize))
        } else {
            toast.error(response.data.message);
            dispatch(editQuizCategoryFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(editQuizCategoryFailure());
    }
};

export const getListQuizCategories = () => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/quiz/quizCategorylist`);
        if (response.data.success) {
            dispatch(getListQuizCategorySuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getListQuizCategoryFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getListQuizCategoryFailure());
    }
};

export const getQuizCategoryById = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/quiz/quizCategory/${id}`);
        if (response.data.success) {
            dispatch(getQuizCategoryByIdSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getQuizCategoryByIdFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getQuizCategoryByIdFailure());
    }
};



export const getQuizCategoryModuleById = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(`/api/quiz/quizCategoryModule/${id}`);
        if (response.data.success) {
            dispatch(getQuizCategoryModuleByIdSuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getQuizCategoryModuleByIdFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getQuizCategoryModuleByIdFailure());
    }
};




export const deleteQuizCategory = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/quiz/delete-quizCategory/${id}`);
        if (response.data.success) {
            dispatch(deleteQuizCategorySuccess(id));
        } else {
            toast.error(response.data.message);
            dispatch(deleteQuizCategoryFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(deleteQuizCategoryFailure());
    }
};

export const {
    getAllQuizCategoriesSuccess,
    getAllQuizCategoriesFailure,
    getQuizCategoriesSuccess,
    getQuizCategoriesFailure,
    createQuizCategorySuccess,
    createQuizCategoryFailure,
    getListQuizCategorySuccess,
    getListQuizCategoryFailure,
    editQuizCategorySuccess,
    editQuizCategoryFailure,
    getQuizCategoryByIdSuccess,
    getQuizCategoryByIdFailure,
    getQuizCategoryModuleByIdSuccess,
    getQuizCategoryModuleByIdFailure,
    deleteQuizCategorySuccess,
    deleteQuizCategoryFailure,
    setLoading
} = quizCategorySlice.actions;

export default quizCategorySlice.reducer;
