import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// redux toolkit
// ADD MUSIC
export const addMusic = createAsyncThunk("ADD_MUSIC", async (arg, thunkAPI) => {
  try {
    const { data } = await axios.post(`http://localhost:3001/lists, arg`);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
//음악 DELETE
export const deleteMusic = createAsyncThunk(
  "DELETE_MUSIC",
  async (arg, thunkAPI) => {
    try {
      axios.delete(`http://localhost:3001/lists/${arg}`);
      return thunkAPI.fulfillWithValue(arg);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// 음악 GET
export const getMusic = createAsyncThunk("GET_MUSIC", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/lists`);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// 초기값
const initialState = {
  lists: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

//리듀서
export const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    clearMusic: (state, action) => {
      state.isSuccess = false;
    },
  },
  extraReducers: {
    //GET_MUSIC
    [getMusic.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.lists = action.payload;
    },
    [getMusic.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getMusic.pending]: (state) => {
      state.isLoading = true;
    },
    //ADD_MUSIC
    [addMusic.pending]: (state) => {
      state.isSuccess = false;
      state.isLoading = true;
    },
    [addMusic.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.lists.push(action.payload);
    },
    [addMusic.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //DELETE_MUSIC
    [deleteMusic.fulfilled]: (state, action) => {
      const target = state.lists.findIndex(
        (data) => data.id === action.payload
      );
      state.lists.splice(target, 1);
    },
    [deleteMusic.rejected]: () => {},
    [deleteMusic.pending]: () => {},
  },
});

export const { clearMusic } = listSlice.actions;
export default listSlice.reducer;
