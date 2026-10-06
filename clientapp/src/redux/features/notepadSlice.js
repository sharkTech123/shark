import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const notepadSlice = createSlice({
  name: "notepad",
  initialState: {
    notepadQuestions: [],
    notepadQuestion: null,
    notepadAnsweres: [],
    notepadAnswere: null,
    loading: false,
  },
  reducers: {
    getAllNotepadQuestionSuccess: (state, action) => {
      state.notepadQuestions = action.payload.notepadQuestions;
    },
    getAllNotepadQuestionFailure: (state) => {
      state.notepadQuestions = [];
    },
    createNotepadAnswereSuccess: (state, action) => {
      state.notepadAnsweres.push(action.payload.notepadAnsweres);
    },
    createNotepadAnswereFailure: (state) => {
      state.loading = false;
    },
    getAllNotepadAnswereSuccess: (state, action) => {
      state.notepadAnsweres = action.payload.notepadAnsweres;
    },
    getAllNotepadAnswereFailure: (state) => {
      state.notepadAnsweres = [];
    },
    editNotepadAnswereSuccess: (state, action) => {
      const updatedNotepadAnswere = action.payload.notepadAnswere;
      state.notepadAnsweres = state.notepadAnsweres.map((notepadAnswere) =>
        notepadAnswere._id === updatedNotepadAnswere._id
          ? updatedNotepadAnswere
          : notepadAnswere
      );
      state.loading = false;
    },
    editNotepadAnswereFailure: (state) => {
      state.loading = false;
    },

    getNotepadQuestionByIdSuccess: (state, action) => {
      state.notepadQuestion = action.payload;
      state.loading = false;
    },
    getNotepadQuestionByIdFailure: (state) => {
      state.notepadQuestion = null;
      state.loading = false;
    },
    getNotepadAnswereByIdSuccess: (state, action) => {
      state.notepadQuestion = action.payload;
      state.loading = false;
    },
    getNotepadAnswereByIdFailure: (state) => {
      state.notepadQuestion = null;
      state.loading = false;
    },
    deleteNotepadAnswereSuccess: (state, action) => {
      const answereId = action.payload;
      state.notepadAnsweres = state.notepadAnsweres.filter(
        (notepadAnswere) => notepadAnswere._id !== answereId
      );

      state.loading = false;
    },
    deleteAnswereFailure: (state) => {
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const getAllNotepadQuestions = (module) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/notepad/questions/${module}`);
    if (response.data.success) {
      dispatch(getAllNotepadQuestionSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getAllNotepadQuestionFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getAllNotepadQuestionFailure());
  }
};

export const createNotepadAnwere =
  (userId, notepadQuestionId, notepadAnswere) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.post(`/api/notepad/answere`, 
        userId,
        notepadQuestionId,
        notepadAnswere,
      );
      if (response.data.success) {
        toast.success(response.data.message);

        dispatch(createNotepadAnswereSuccess(response.data.data));
      } else {
        toast.error(response.data.message);
        dispatch(createNotepadAnswereFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(createNotepadAnswereFailure());
    }
  };

export const getAllNotepadAnsweres = (data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/notepad/all-answers`, data);
    if (response.data.success) {
      dispatch(getAllNotepadAnswereSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getAllNotepadAnswereFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getAllNotepadAnswereFailure());
  }
};

export const editAnswere = (id, data) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.post(
      `/api/notepad/update-answere/${id}`,
      data
    );
    if (response.data.success) {
      dispatch(editNotepadAnswereSuccess(response.data.data));
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
      dispatch(editNotepadAnswereFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(editNotepadAnswereFailure());
  }
};

export const deleteAnswere = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.post(
      `/api/notepad/delete-answere/${id}`
    );
    if (response.data.success) {
      dispatch(deleteNotepadAnswereSuccess(id));
    } else {
      toast.error(response.data.message);
      dispatch(deleteAnswereFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteAnswereFailure());
  }
};

export const {
  getAllNotepadQuestionSuccess,
  getAllNotepadQuestionFailure,
  createNotepadAnswereSuccess,
  createNotepadAnswereFailure,
  getAllNotepadAnswereSuccess,
  getAllNotepadAnswereFailure,
  editNotepadAnswereSuccess,
  editNotepadAnswereFailure,

  deleteNotepadAnswereSuccess,
  deleteAnswereFailure,
  setLoading,
} = notepadSlice.actions;

export default notepadSlice.reducer;
