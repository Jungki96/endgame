// src/redux/modules/todosSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// redux toolkit
export const __getMusic = createAsyncThunk(
  "lists/getLists",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/lists");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// initialState
const initialState = {
  lists: [],
  isLoading: false,
  error: null,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMusic.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getMusic.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getMusic.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const {} = listSlice.actions;
export default listSlice.reducer;
