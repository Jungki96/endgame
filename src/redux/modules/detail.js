import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (arg, thunkAPI) => {
    try {
      const { data } = axios.delete(`http://localhost:3001/comments/${arg}`);
      console.log({ data });
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);
export const editComment = createAsyncThunk(
  "EDIT_COMMENT",
  async (arg, thunkAPI) => {
    console.log("detail 넘어온값:", arg);
    try {
      axios.patch(`http://localhost:3001/comments/${arg}`, arg);
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const getMusicThunk = createAsyncThunk(
  "GET_TODO",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/lists/${arg}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);
export const editMusic = createAsyncThunk(
  "UPDATE_TODO",
  async (arg, thunkAPI) => {
    try {
      axios.patch(`http://localhost:3001/lists/${arg.id}`, arg);
      return thunkAPI.fulfillWithValue(arg);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

// 초기값
const initialState = {
  list: {
    id: 0,
    title: "",
    singer: "",
    desc: "",
  },
  lists: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

//리듀서
export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    clearMusic: (state) => {
      state.isSuccess = false;
    },
  },
  extraReducers: {
    //EDIT_COMMNET
    [editComment.pending]: (state) => {
      state.isLoading = true;
    },
    [editComment.fulfilled]: (state, action) => {
      const target = state.comments.data.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.isLoading = false;
      state.comments.data.splice(target, 1, action.payload);
    },
    [editComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //DELETE_COMMENT
    [deleteComment.fulfilled]: (state, action) => {
      const target = state.lists.findIndex(
        (comment) => comment.id === action.payload
      );
      state.lists.splice(target, 1);
    },
    [deleteComment.rejected]: () => {},
    [deleteComment.pending]: () => {},
    [getMusicThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    [getMusicThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getMusicThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [editMusic.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    [editMusic.pending]: (state) => {
      state.isLoading = true;
    },
    [editMusic.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { clearMusic, clearmusic } = detailSlice.actions;
export default detailSlice.reducer;
