import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/lists/comments${arg}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

// 초기값
const initialState = {
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
    clearMusic: (state, action) => {
      state.isSuccess = false;
    },
  },
  extraReducers: {
    //DELETE_MUSIC
    [deleteComment.fulfilled]: (state, action) => {
      const target = state.lists.findIndex(
        (data) => data.id === action.payload
      );
      state.lists.splice(target, 1);
    },
    [deleteComment.rejected]: () => {},
    [deleteComment.pending]: () => {},
  },
});

export const { clearMusic } = detailSlice.actions;
export default detailSlice.reducer;
