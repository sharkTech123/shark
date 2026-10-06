import { createSlice } from "@reduxjs/toolkit";
import httpHandler from "../../utils/httpHandler";
import { toast } from "react-hot-toast";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quizzes: [],

    quizzesCount: 0,
    TotalQuestions: null,
    AttemptedQuestions: null,
    quizzesModule: [],
    quizzesModuleCount: 0,
    loading: false,
    quizzesList: [],
    outputData: localStorage.getItem("questionData")
      ? JSON.parse(localStorage.getItem("questionData"))
      : [],
    oneQuizOutput: [],
    oneQuiz: {},
    quizResult: [],
    quiz: null,
    oneQuizModule: {},
    isQuizRestarted: false,
  },
  reducers: {
    getAllQuizzesSuccess: (state, action) => {
      state.quizzes = action.payload.quizzes;
      state.quizzesCount = action.payload.totalCount;

      state.loading = false;
    },
    getAllQuizzesFailure: (state) => {
      state.quizzes = [];

      state.quizzesCount = 0;
      state.loading = false;
    },
    getAllQuizzesModuleSuccess: (state, action) => {
      state.quizzesModule = action.payload.quizzes;
      state.quizzesModuleCount = action.payload.totalCount;
      state.loading = false;
    },
    getAllQuizzesModuleFailure: (state) => {
      state.quizzesModule = [];
      state.quizzesModuleCount = 0;
      state.loading = false;
    },
    getQuizRandomQuestionSuccess: (state, action) => {
      if (action.payload.data && action.payload.data.option) {
        // Just retain the options as they are without shuffling
        state.oneQuiz = {
          ...action.payload.data,
          option: action.payload.data.option, // No shuffling here
        };
      } else {
        state.oneQuiz = action.payload.data; // Fallback in case structure is different
      }
      console.log(
        "fegihkdsjxcnbjdfsnvbhfxcnzjdszhmxbcnjdxhcnbd",
        action.payload
      );

      state.TotalQuestions = action.payload.totalQuestionsData;
      state.AttemptedQuestions = action.payload.attemptedQuestionData;
      state.loading = false;
    },
    getQuizRandomQuestionFailure: (state) => {
      state.oneQuiz = {};
      state.loading = false;
    },
    getQuizResultSuccess: (state, action) => {
      state.quizResult = action.payload;
      state.loading = false;
    },
    getQuizResultFailure: (state) => {
      state.quizResult = [];
      state.loading = false;
    },

    getQuizRandomQuestionOutputSuccess: (state, action) => {
      state.oneQuizOutput = action.payload;

      // Get the existing data from localStorage
      const existingData = localStorage.getItem("questionData")
        ? JSON.parse(localStorage.getItem("questionData"))
        : [];

      // Add the new data (action.payload) to the existing data
      existingData.push(action.payload);

      // Save the updated array back to localStorage
      localStorage.setItem("questionData", JSON.stringify(existingData));

      // Update the outputData in state to reflect the new data
      state.outputData = existingData;
    },

    getQuizRandomQuestionOutputFailure: (state) => {
      state.oneQuizOutput = {};
      // state.loading = false;
    },
    createQuizSuccess: (state, action) => {
      state.quizzes.push(action.payload.quiz);
      state.quizzesCount = action.payload.totalCount;
      state.loading = false;
    },
    createQuizFailure: (state) => {
      state.loading = false;
    },
    editQuizSuccess: (state, action) => {
      // const updatedQuiz = action.payload.quiz;
      // state.quizzes = state.quizzes.map(quiz => quiz._id === updatedQuiz._id ? updatedQuiz : quiz);
      state.loading = false;
    },
    editQuizFailure: (state) => {
      state.loading = false;
    },
    getListQuizSuccess: (state, action) => {
      state.quizzesList = action.payload;
      state.loading = false;
    },
    getListQuizFailure: (state) => {
      state.quizzesList = [];
      state.loading = false;
    },
    getQuizByIdSuccess: (state, action) => {
      state.quiz = action.payload;
      state.loading = false;
    },
    getQuizByIdFailure: (state) => {
      state.quiz = null;
      state.loading = false;
    },

    getQuizModuleByIdSuccess: (state, action) => {
      state.oneQuizModule = action.payload;
      state.loading = false;
    },
    getQuizModuleByIdFailure: (state) => {
      state.oneQuizModule = {};
      state.loading = false;
    },
    deleteQuizSuccess: (state, action) => {
      const quizId = action.payload;
      state.quizzes = state.quizzes.filter((quiz) => quiz._id !== quizId);
      state.quizzesCount = state.quizzesCount - 1;
      state.loading = false;
    },
    deleteQuizFailure: (state) => {
      state.loading = false;
    },

    setLoading: (state) => {
      state.loading = true;
    },
    restartQuizSuccess: (state, action) => {
      // Reset the state relevant to the quiz
      state.oneQuiz = action.payload.data; // Load new quiz data
      state.quizResult = []; // Clear previous results
      state.isQuizRestarted = true; // Mark that the quiz has been restarted
      state.loading = false;
    },

    restartQuizFailure: (state) => {
      state.loading = false;
    },

    // Optionally, you can reset the restart state
    resetQuizRestarted: (state) => {
      state.isQuizRestarted = false;
    },

    resetOneQuizOutput: (state) => {
      localStorage.removeItem("questionData");
      state.outputData = []; // Reset the oneQuizOutput state
    },
  },
});

export const getRandomQuestion = (cid, id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(
      `/api/quiz/getRandomQuestion/${cid}${id ? "/" + id : ""}`
    );
    if (response.data.success) {
      dispatch(getQuizRandomQuestionSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getQuizRandomQuestionFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getQuizRandomQuestionFailure());
  }
};

export const getRandomQuestionByName =
  (cid, id = undefined) =>
  async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.get(
        `/api/quiz/getRandomQuestionCatName/${cid}${id ? "/" + id : ""}`
      );
      if (response.data.success) {
        dispatch(resetOneQuizOutput());

        const question = response.data.data;
        // Check if question has options
        if (question) {
          dispatch(
            getQuizRandomQuestionSuccess({
              ...question,
            })
          );
        } else {
          dispatch(getQuizRandomQuestionFailure()); // Handle missing options
        }
      } else {
        toast.error(response.data.message);
        dispatch(getQuizRandomQuestionFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(getQuizRandomQuestionFailure());
    }
  };

///////////////////////////////////////////////////////////
export const restartQuiz = (cid) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/quiz/restart-quiz/${cid}`);
    if (response.data.success) {
      dispatch(restartQuizSuccess(response.data.data));
      toast.success("Quiz restarted successfully!");
    } else {
      toast.error(response.data.message);
      dispatch(restartQuizFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(restartQuizFailure());
  }
};

////////////////////////////////////////////////////////////////

export const getQuizResult = (userId, type) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(
      `/api/quiz/getQuizResult/${userId}/${type}`
    );
    if (response.data.success) {
      dispatch(getQuizResultSuccess(response.data.data.quizResult));
    } else {
      toast.error(response.data.message || "Failed to load results");
      dispatch(getQuizResultFailure());
    }
  } catch (error) {
    toast.error(
      error?.response?.data?.message || error.message || "Failed to load results"
    );
    dispatch(getQuizResultFailure());
  }
};


export const getQuizResultAdmin = (userReportId) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(
      `/api/quiz/getAdminQuizResult/${userReportId}`
    );
    if (response.data.success) {
      dispatch(getQuizResultSuccess(response.data.data.quizResult));
    } else {
      toast.error(response.data.message);
      dispatch(getQuizResultFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getQuizResultFailure());
  }
};

export const getAnswerRandomQuestion = (data) => async (dispatch) => {
  try {
    // dispatch(setLoading());
    const response = await httpHandler.post(`/api/quiz/answerQuestion`, data);
    if (response.data.success) {
      dispatch(getQuizRandomQuestionOutputSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getQuizRandomQuestionOutputFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getQuizRandomQuestionOutputFailure());
  }
};

export const getAllQuizzes = (search, page, pagesize) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(
      `/api/quiz/all-quizzes?search=${search}&page=${page}`
    );
    if (response.data.success) {
      dispatch(getAllQuizzesSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getAllQuizzesFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getAllQuizzesFailure());
  }
};

export const createQuiz =
  (data, reset, toggleAddQuizModal, state) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.post(`/api/quiz/addQuestion`, data);
      if (response.data.success) {
        toast.success(response.data.message);
        reset();
        toggleAddQuizModal();
        dispatch(getAllQuizzes(state.search, state.page, state.pageSize));
        
      } else {
        toast.error(response.data.message);
        dispatch(createQuizFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(createQuizFailure());
    }
  };

export const editQuiz =
  (id, data, reset, toggleEditQuizModal, state) => async (dispatch) => {
    try {
      dispatch(setLoading());
      console.log("dayyttttt", data);
      const response = await httpHandler.post(
        `/api/quiz/updateQuestion/${id}`,
        data
      );
      if (response.data.success) {
        dispatch(editQuizSuccess(response.data.data));
        toast.success(response.data.message);
        reset();
        toggleEditQuizModal();
        dispatch(getAllQuizzes(state.search, state.page, state.pageSize));
      } else {
        toast.error(response.data.message);
        dispatch(editQuizFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(editQuizFailure());
    }
  };

export const deleteQuiz = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.post(`/api/quiz/delete-quiz/${id}`);
    if (response.data.success) {
      dispatch(deleteQuizSuccess(id));
      dispatch(getQuizRandomQuestionSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(deleteQuizFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteQuizFailure());
  }
};

export const getListQuizzes = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/quiz/quizlist`);
    if (response.data.success) {
      dispatch(getListQuizSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getListQuizFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getListQuizFailure());
  }
};

export const getQuizById = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/quiz/quiz/${id}`);
    if (response.data.success) {
      dispatch(getQuizByIdSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getQuizByIdFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getQuizByIdFailure());
  }
};

export const getAllQuizzesModule =
  (search, page, pagesize) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.get(
        `/api/quiz/all-quizzesModule?search=${search}&page=${page}&pagesize=${pagesize}`
      );
      if (response.data.success) {
        dispatch(getAllQuizzesModuleSuccess(response.data.data));
      } else {
        toast.error(response.data.message);
        dispatch(getAllQuizzesFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(getAllQuizzesFailure());
    }
  };

export const createQuizModule =
  (data, reset, toggleAddQuizModal, state) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.post(`/api/quiz/addquizModule`, data);
      if (response.data.success) {
        toast.success(response.data.message);
        reset();
        toggleAddQuizModal();
        dispatch(getAllQuizzesModule(state.search, state.page, state.pageSize));
        // dispatch(createQuizSuccess(response.data.data));
      } else {
        toast.error(response.data.message);
        dispatch(createQuizFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(createQuizFailure());
    }
  };

export const editQuizModule =
  (id, data, reset, toggleEditQuizModal, state) => async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await httpHandler.post(
        `/api/quiz/updatequizModule/${id}`,
        data
      );
      if (response.data.success) {
        // dispatch(editQuizSuccess(response.data.data));
        toast.success(response.data.message);
        reset();
        toggleEditQuizModal();
        dispatch(getAllQuizzesModule(state.search, state.page, state.pageSize));
      } else {
        toast.error(response.data.message);
        dispatch(editQuizFailure());
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(editQuizFailure());
    }
  };

export const deleteQuizModule = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/quiz/delete-quizModule/${id}`);
    if (response.data.success) {
      dispatch(deleteQuizSuccess(id));
    } else {
      toast.error(response.data.message);
      dispatch(deleteQuizFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(deleteQuizFailure());
  }
};

export const getQuizModuleListQuizzes = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/quiz/quizModulelist`);
    if (response.data.success) {
      dispatch(getListQuizSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getListQuizFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getListQuizFailure());
  }
};

export const getQuizModuleById = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await httpHandler.get(`/api/quiz/quizModule/${id}`);
    if (response.data.success) {
      dispatch(getQuizModuleByIdSuccess(response.data.data));
    } else {
      toast.error(response.data.message);
      dispatch(getQuizModuleByIdFailure());
    }
  } catch (error) {
    toast.error(error.message);
    dispatch(getQuizByIdFailure());
  }
};

export const {
  getAllQuizzesSuccess,
  getAllQuizzesFailure,
  getAllQuizzesModuleSuccess,
  getAllQuizzesModuleFailure,
  getQuizRandomQuestionSuccess,
  getQuizRandomQuestionFailure,
  getQuizResultSuccess,
  getQuizResultFailure,
  getQuizRandomQuestionOutputSuccess,
  getQuizRandomQuestionOutputFailure,
  createQuizSuccess,
  createQuizFailure,
  getListQuizSuccess,
  getListQuizFailure,
  editQuizSuccess,
  editQuizFailure,
  getQuizByIdSuccess,
  getQuizByIdFailure,
  getQuizModuleByIdSuccess,
  getQuizModuleByIdFailure,
  deleteQuizSuccess,
  deleteQuizFailure,
  restartQuizSuccess,
  restartQuizFailure,
  resetQuizRestarted,
  resetOneQuizOutput,
  outputData,

  setLoading,
} = quizSlice.actions;

export default quizSlice.reducer;
