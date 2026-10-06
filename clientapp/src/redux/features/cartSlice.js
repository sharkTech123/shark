import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import httpHandler from "../../utils/httpHandler";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).updatedCart || []
      : [],
    loading: false,
    hashcode: "",
    myOrders: [],
    myOrdersCount: null,
    payment: localStorage.getItem("payment")
      ? JSON.parse(localStorage.getItem("payment"))
      : {},
  },

  reducers: {
    removeCart: (state, action) => {
      state.cart = [];
    },
    removeCartItems: (state) => {
      localStorage.removeItem("cart");
      state.cart = [];
    },

    getCompleteCheckoutSuccess: (state, action) => {
      localStorage.setItem("payment", JSON.stringify(action.payload.order));
      state.payment = action.payload.order;
    },
    getCompleteCheckoutFailure: (state) => {
      state.payment = {};
    },
    getGenerateHashCodeSuccess: (state, action) => {
      state.hashcode = action.payload;
    },
    getGenerateHashCodeFailure: (state) => {
      state.hashcode = "";
    },
    getOrdersSuccess: (state, action) => {
      state.myOrders = action.payload;
      state.myOrdersCount = action.payload.totalCount;
    },
    getOrdersFailure: (state) => {
      state.myOrders = [];
    },
    IncreaseCart: (state, action) => {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, count: item.count + action.payload.count }
          : item
      );

      const itemExists = state.cart.some(
        (item) => item.id === action.payload.id
      );
      let datew = [...state.cart, action.payload];
      localStorage.setItem(
        "cart",
        itemExists ? JSON.stringify({ updatedCart }) : JSON.stringify({ datew })
      );

      return {
        ...state,
        cart: itemExists ? updatedCart : [...state.cart, action.payload],
      };
    },
    // DecreaseCart: (state, action) => {

    //     const updatedCart = state.cart.map(item => item.id === action.payload.id ? { ...item, count: item.count - action.payload.count } : item);

    //     const itemExists = state.cart.some(item => item.id === action.payload.id);

    //     let datew = [...state.cart, action.payload]
    //     localStorage.setItem("cart", itemExists ? JSON.stringify({ updatedCart }) : JSON.stringify({ datew }))
    //     return {
    //         ...state,
    //         cart: itemExists ? updatedCart : [...state.cart, action.payload]
    //     };

    // },

    DecreaseCart: (state, action) => {
      const updatedCart = state.cart
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count - action.payload.count }
            : item
        )
        .filter((item) => item.count > 0);
      const itemExists = state.cart.some(
        (item) => item.id === action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify({ updatedCart }));
      return {
        ...state,
        cart: updatedCart,
      };
    },
    AddToCart: (state, action) => {
      // state.cart.push(action.payload);
      let updatedCart = [];
      if (state.cart) {
        updatedCart = [...state.cart, action.payload];
      } else {
        updatedCart = [action.payload];
      }

      localStorage.setItem("cart", JSON.stringify({ updatedCart }));
      return {
        ...state,
        cart: updatedCart,
      };
      // localStorage.setItem("cart",itemExists ? updatedCart : [...state.cart, action.payload])

      // state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },

    AddToCart: (state, action) => {
      let updatedCart = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify({ updatedCart }));
      return {
        ...state,
        cart: updatedCart,
      };
    },
    EmptyCart: (state) => {
      localStorage.removeItem("cart");
      return {
        ...state,
        cart: [],
      };
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const getIncreaseCart = (id, count) => async (dispatch) => {
  try {
    dispatch(setLoading());
    toast.success("Product added to cart", {
      position: "center",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      theme: "dark",
      transition: "Bounce",
    });
    dispatch(IncreaseCart({ id, count }));
  } catch (error) {
    toast.error("Failed to add to cart", {
      position: "center",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      theme: "dark",
      transition: "Bounce",
    });
  }
};

export const getDecreaseCart = (id, count) => async (dispatch) => {
  try {
    dispatch(setLoading());
    toast.success("Product quantity decreased in cart", {
      position: "center",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      theme: "dark",
      transition: "Bounce",
    });
    dispatch(DecreaseCart({ id, count }));
  } catch (error) {
    toast.error("Failed to decrease in cart", {
      position: "center",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      theme: "dark",
      transition: "Bounce",
    });
  }
};

export const getAddToCart = (product, navigate) => async (dispatch) => {
  try {
    dispatch(setLoading());
    toast.success("Product added to cart", {
      position: "center",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      theme: "dark",
      transition: "Bounce",
    });
    navigate("/cart");
    dispatch(AddToCart(product));
  } catch (error) {
    toast.error("Failed to add to cart", {
      position: "center",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      theme: "dark",
      transition: "Bounce",
    });
  }
};

export const getAddToCart2 = (product) => async (dispatch) => {
  try {
    dispatch(setLoading());
    toast.success("Product added to cart", {
      position: "center",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      theme: "dark",
      transition: "Bounce",
    });

    dispatch(AddToCart(product));
  } catch (error) {
    toast.error("Failed to add to cart", {
      position: "center",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      theme: "dark",
      transition: "Bounce",
    });
  }
};

export const emptyCart = () => async (dispatch) => {
  try {
    toast.success("Cart emptied successfully");
    dispatch(EmptyCart());
  } catch (error) {
    toast.error("Failed to empty cart");
  }
};

export const removingCart = (data, cb) => async (dispatch) => {
  try {
    dispatch(setLoading());
    dispatch(removeCart());
  } catch (error) {
    toast.error(error.message);
  }
};

export const getCompleteCheckout = (data, cb) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.post(
      `/api/order/CompleteCheckout`,
      data
    );
    if (response.data.success) {
      dispatch(getCompleteCheckoutSuccess(response.data.data));
      cb();
    } else {
      toast.error(response.data.message);
      dispatch(getCompleteCheckoutFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getCompleteCheckoutFailure());
  }
};

export const generateHashcodeCheckout =
  (data, cb, form, additionalData) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.post(`/api/order/generate_hash`, data);

      if (response.data.hash_code) {
        dispatch(getGenerateHashCodeSuccess(response.data.hash_code));
        additionalData.value = response.data.hash_code;
        form.appendChild(additionalData);
        form.submit();
      } else {
        toast.error(response.data.message);
        dispatch(getGenerateHashCodeFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(getGenerateHashCodeFailure());
    }
  };

export const getMyOrders = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/order/getMyOrder`);

    if (response.data.data) {
      dispatch(getOrdersSuccess(response.data.data.order));
    } else {
      toast.error(response.data.message);
      dispatch(getOrdersFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getOrdersFailure());
  }
};

export const {
  IncreaseCart,
  DecreaseCart,
  AddToCart,
  setLoading,
  removeCart,
  getCompleteCheckoutSuccess,
  getCompleteCheckoutFailure,
  getGenerateHashCodeSuccess,
  getGenerateHashCodeFailure,
  getOrdersSuccess,
  getOrdersFailure,
  EmptyCart,
  removeCartItems,
} = cartSlice.actions;

// export const { IncreaseCart, DecreaseCart, AddToCart, EmptyCart, setLoading } = cartSlice.actions;

export default cartSlice.reducer;
