// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const __getCommentsThunk = createAsyncThunk(
//   "GET_COMMENTS",
//   async (arg, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`http://localhost:3001/lists`);
//       return thunkAPI.fulfillWithValue(data);
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.code);
//     }
//   }
// );

// export const __getCommnetsByMusicId = createAsyncThunk(
//   "GET_COMMENT_BY_MUSIC_ID",
//   async (arg, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`${serverUrl}/comments?todoId=${arg}`);
//       return thunkAPI.fulfillWithValue(data);
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.code);
//     }
//   }
// );

// const initialState = {
//   comments: {
//     data: [],
//     isLoading: false,
//     error: null,
//   },
//   commentsByTodoId: {
//     data: [],
//     isLoading: false,
//     error: null,
//   },
// };

// export const commentsSlice = createSlice({
//   name: "comments",
//   initialState,
//   reducers: {
//     clearTodo: (state) => {
//       state.comments = null;
//     },
//   },
//   extraReducers: {
//     // 전체 댓글 조회
//     [__getCommentsThunk.pending]: (state) => {
//       state.comments.isLoading = true;
//     },
//     [__getCommentsThunk.fulfilled]: (state, action) => {
//       state.comments.isLoading = false;
//       state.comments.data = action.payload;
//     },
//     [__getCommentsThunk.rejected]: (state, action) => {
//       state.comments.isLoading = false;
//       state.comments.error = action.payload;
//     },
//   },
// });

// export default commentsSlice.reducer;
