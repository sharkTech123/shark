import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        sortedProducts: [],
        productsCategory: [],
        oneproduct: {},
        productCount: null,
        productsCategoryCount: null,
        loading: false,
        status: 'idle',
    },
    reducers: {
        getAllProductsSuccess: (state, action) => {
            state.products = action.payload.products;
            state.sortedProducts = action.payload.products;

            state.productCount = action.payload.totalCount;
            state.loading = false;
        },
        getAllProductsFailure: (state) => {
            state.products = [];
            state.sortedProducts = [];

            state.productCount = null;
            state.loading = false;
        },
        sortProducts: (state, action) => {
            const { sortOption } = action.payload;
            let sortedArray = [...state.products];
            if (sortOption === "lowest") {
                sortedArray.sort((a, b) => a.price - b.price);
            } else if (sortOption === "highest") {
                sortedArray.sort((a, b) => b.price - a.price);
            } else if (sortOption === "a-z") {
                sortedArray.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sortOption === "z-a") {
                sortedArray.sort((a, b) => b.name.localeCompare(a.name));
            }
            state.sortedProducts = sortedArray;
        },
        searchProducts: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            state.sortedProducts = state.products.filter(product =>
                product.name.toLowerCase().includes(searchTerm)
            );
        },
        getAllProductsCategorySuccess: (state, action) => {
            state.productsCategory = action.payload.products;
            state.productsCategoryCount = action.payload.totalCount;
            state.loading = false;
        },
        getAllProductsCategoryFailure: (state) => {
            state.productsCategory = [];
            state.productsCategoryCount = null;
            state.loading = false;
        },

        getOneProductsSuccess: (state, action) => {
            state.oneproduct = action.payload
        },
        getOneProductsFailure: (state) => {
            state.products = [];
            state.oneproduct = {}
            state.productCount = null;
            state.loading = false;
        },
        createProductSuccess: (state, action) => {
          
            state.loading = false;
        },
        createProductFailure: (state) => {
            state.loading = false;
        },
        editProductSuccess: (state, action) => {
            // state.products.push(action.payload.product);
            // state.productCount = action.payload.totalCount;
            state.loading = false;
        },
        editProductFailure: (state) => {
            state.loading = false;
        },
        createCategorySuccess: (state, action) => {
            state.products.push(action.payload.category);
            state.productCount = action.payload.totalCount;
            state.loading = false;
        },
        createCategoryFailure: (state) => {
            state.loading = false;
        },
        deleteProductSuccess: (state, action) => {
            state.products = state.products.filter(
                (product) => product._id !== action.payload.id
            );
            state.productCount = action.payload.totalCount;
            // state.loading = false;
        },
        deleteProductFailure: (state) => {
            // state.loading = false;
        },
        setLoading: (state) => {
            state.loading = true;
        },
    },
});

export const getAllProducts = (search, page, pagesize) => async (dispatch) => {
    try {
        dispatch(setLoading());

        const response = await httpHandler.get(
            `/api/product/get-products?search=${search}&page=${page}`
        );
        if (response.data.success) {
            dispatch(getAllProductsSuccess(response.data.data));

            dispatch(sortProducts(response.data.data))
        } else {
            toast.error(response.data.message);
            dispatch(getAllProductsFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getAllProductsFailure());
    }
};
export const getAllProductsCategory = (search, page, pagesize) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/product/get-productsCategory?search=${search}&page=${page}&pagesize=${pagesize}`
        );
        if (response.data.success) {
            dispatch(getAllProductsCategorySuccess(response.data.data));
        } else {
            toast.error(response.data.message);
            dispatch(getAllProductsCategoryFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getAllProductsFailure());
    }
};

export const getAllProductsById = (id) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.get(
            `/api/product/get-products/${id}`
        );
        if (response.data) {
            dispatch(getOneProductsSuccess(response.data));
        } else {
            toast.error(response.statusText);
            dispatch(getOneProductsFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(getAllProductsFailure());
    }
};

export const createCategory = (data, reset, toggleAddCategoryModal) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/product/add-category`, data);
        if (response.data.success) {
            toast.success(response.data.message);
         
            dispatch(createCategorySuccess(response.data.data));
           
            toggleAddCategoryModal();
            reset();
        } else {
            toast.error(response.data.message);
            dispatch(createCategoryFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(createCategoryFailure());
    }
};



export const createProduct = (data, reset, toggleAddCategoryModal, state) => async (dispatch) => {
    try {
        dispatch(setLoading());
        console.log("data..........",data);
        const response = await httpHandler.post(`/api/product/add-product`, data);
        if (response.data.success) {
            toast.success(response.data.message);
            reset();
            dispatch(createProductSuccess(response.data.data));
            toggleAddCategoryModal();
            
        } else {
            toast.error(response.data.message);
            dispatch(createProductFailure());
            return { success: false, message: response.data.message };
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(createProductFailure());
    }
};

export const editProduct = (id, data, reset, toggleEditProductModal, state) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const response = await httpHandler.post(`/api/product/edit-product/${id}`, data, { headers: { "Content-Type": "multipart/form-data" } });
        if (response.data.success) {
            toast.success(response.data.message);
            reset();
            toggleEditProductModal();
            dispatch(getAllProducts(state.search, state.page, state.pageSize))
        } else {
            toast.error(response.data.message);
            dispatch(editProductFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(editProductFailure());
    }
};
export const deleteProduct = (id) => async (dispatch) => {
    try {
        // dispatch(setLoading());
        const response = await httpHandler.get(`/api/product/delete-product/${id}`);
        if (response.data.success) {
            toast.success("product deleted success");
            dispatch(deleteProductSuccess({ id, totalCount: response.data.totalCount }));
        } else {
            toast.error("product deleted success");
            dispatch(deleteProductFailure());
        }
    } catch (error) {
        toast.error(error.message);
        dispatch(deleteProductFailure());
    }
};

export const {
    getAllProductsSuccess,
    getAllProductsFailure,
    getAllProductsCategorySuccess,
    getAllProductsCategoryFailure,
    getOneProductsSuccess,
    getOneProductsFailure,
    createProductSuccess,
    createProductFailure,
    editProductSuccess,
    editProductFailure,
    createCategorySuccess,
    createCategoryFailure,
    deleteProductSuccess,
    deleteProductFailure,
    setLoading,
    sortProducts,
    searchProducts,

} = productSlice.actions;

export default productSlice.reducer;
