import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getComment = createAsyncThunk(
  "GET_COMMENT",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MUSIC}/lists/${arg}`
      );
      return thunkAPI.fulfillWithValue(data.comments);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const initialState = {
  data: {
    coid: "",
    comment: "",
    username: 0,
  },
  isLoading: false,
  error: null,
  isGlobalEditmode: false,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    //동기
    clearComment: (state) => {
      state.data.content = "";
    },
  },
  extraReducers: {
    //비동기
    [getComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { clearComment } = commentSlice.actions;
export default commentSlice.reducer;
