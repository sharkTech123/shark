import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";
import axios from "axios";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    allblogs: [],
    blogsCount: null,
    loading: false,
    blogsList: [],
    blog: null,
    news: [],

    newsCount: null,
    lastFetched: null,
  },
  reducers: {
    getAllBlogsSuccess: (state, action) => {
      state.blogs = action.payload.blogs;
      state.blogsCount = action.payload.totalCount;
      state.loading = false;
    },
    getAllBlogsFailure: (state) => {
      state.blogs = [];
      state.blogsCount = null;
      state.loading = false;
    },
    getAllBlogsDataSuccess: (state, action) => {
      state.allblogs = action.payload.blogs;

      state.loading = false;
    },
    getAllBlogsDataFailure: (state) => {
      state.allblogs = [];

      state.loading = false;
    },

    fetchNewsSuccess: (state, action) => {
      state.news = action.payload.articles;
      state.newsCount = action.payload.totalCount;
      state.loading = false;
      state.lastFetched = new Date().getTime();
    },
    fetchNewsFailure: (state) => {
      state.news = localStorage.getItem("news")
        ? JSON.parse(localStorage.getItem("news"))
        : [];
      state.loading = false;
      state.error = "news";
    },
    createBlogSuccess: (state, action) => {
      state.blogs.push(action.payload.blog);
      state.blogsCount = action.payload.totalCount;
      state.loading = false;
    },
    createBlogFailure: (state) => {
      state.loading = false;
    },
    editBlogSuccess: (state, action) => {
      const updatedBlog = action.payload.blog;
      const updatedBlogs = state.blogs.map((blog) => {
        if (blog._id === updatedBlog._id) {
          return updatedBlog;
        }
        return blog;
      });
      state.blogs = updatedBlogs;
      state.loading = false;
    },
    editBlogFailure: (state) => {
      state.loading = false;
    },
    getListBlogsSuccess: (state, action) => {
      state.blogsList = action.payload;
      state.loading = false;
    },
    getListBlogsFailure: (state) => {
      state.blogsList = [];
      state.loading = false;
    },
    getBlogByIdSuccess: (state, action) => {
      state.blog = action.payload;
      state.loading = false;
    },
    getBlogByIdFailure: (state) => {
      state.blog = null;
      state.loading = false;
    },
    deleteBlogSuccess: (state, action) => {
      const blogId = action.payload;
      state.blogs = state.blogs.filter((blog) => blog._id !== blogId);
      state.blogsCount = state.blogsCount - 1;
      state.loading = false;
    },
    deleteBlogFailure: (state) => {
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const fetchNews = () => async (dispatch) => {
  try {
    dispatch(setLoading());

    const response = await httpHandler.get(`/api/blogs/fetched-news`);

    if (response.data.success) {
      localStorage.setItem("news", JSON.stringify(response.data.data.articles));
      dispatch(fetchNewsSuccess(response.data.data));
      toast.success(response.data.message);
    } else {
      toast.success("news fetched");
      dispatch(fetchNewsFailure());
    }
  } catch (error) {
    toast.success("news fetched");
    dispatch(fetchNewsFailure());
  }
};

export const fetchAllBlogs = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/blogs/all-blogsData`);
    if (response.data.success) {
      dispatch(getAllBlogsDataSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getAllBlogsDataFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getAllBlogsDataFailure());
  }
};

export const getAllBlogs = (search, page, pagesize) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(
      `/api/blogs/all-blogs?search=${search}&page=${page}`
    );
    if (response.data.success) {
      dispatch(getAllBlogsSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getAllBlogsFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getAllBlogsFailure());
  }
};

export const createBlog =
  (data, reset, toggleAddBlogModal) => async (dispatch) => {
    try {
      dispatch(setLoading());
      console.log("data...............", data);
      const response = await httpHandler.post(`/api/blogs/create-blog`, data);
      if (response.data.success) {
        toast.success(response.data.message);
        reset();
        toggleAddBlogModal();
        dispatch(createBlogSuccess(response.data.data));
      } else {
        toast.error(response.data.message);
        dispatch(createBlogFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(createBlogFailure());
    }
  };

export const editBlog = (id, data, toggleEditBlogModal) => async (dispatch) => {
  try {
    dispatch(setLoading());
    console.log("Data sent to API:", data);
    const response = await httpHandler.post(
      `/api/blogs/update-blog/${id}`,
      data
    );
    if (response.data.success) {
      dispatch(editBlogSuccess(response.data.data));
      toast.success(response.data.message);
      toggleEditBlogModal();
    } else {
      toast.error(response.data.message);
      dispatch(editBlogFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(editBlogFailure());
  }
};

export const getListBlogs = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/blogs/blog-list`);
    if (response.data.success) {
      dispatch(getListBlogsSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getListBlogsFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getListBlogsFailure());
  }
};

export const getBlogById = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/blogs/blog/${id}`);
    if (response.data.success) {
      dispatch(getBlogByIdSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getBlogByIdFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getBlogByIdFailure());
  }
};

export const deleteBlog = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.post(`/api/blogs/delete-blog/${id}`);
    if (response.data.success) {
      dispatch(deleteBlogSuccess(id));
    } else {
      toast.error(response.data.message);
      dispatch(deleteBlogFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteBlogFailure());
  }
};

export const {
  getAllBlogsSuccess,
  getAllBlogsFailure,
  getAllBlogsDataSuccess,
  getAllBlogsDataFailure,
  createBlogSuccess,
  createBlogFailure,
  getListBlogsSuccess,
  getListBlogsFailure,
  editBlogSuccess,
  editBlogFailure,
  getBlogByIdSuccess,
  getBlogByIdFailure,
  deleteBlogSuccess,
  deleteBlogFailure,
  fetchNewsSuccess,
  fetchNewsFailure,
  setLoading,
} = blogSlice.actions;

export default blogSlice.reducer;
