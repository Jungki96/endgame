import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// redux toolkit
// GET_MUSIC
export const getMusic = createAsyncThunk("GET_MUSIC", async (arg, thunkAPI) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/lists/${arg}`);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

//UPDATE_MUSIC
export const updateMusic = createAsyncThunk(
  "UPDATE_MUSIC",
  async (arg, thunkAPI) => {
    try {
      axios.patch(`http://localhost:3001/lists/${arg.id}`, arg);
      return thunkAPI.fulfillWithValue(arg);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//INITIAL STATE
const initialState = {
  music: {
    id: 0,
    title: "",
    singer: "",
    desc: "",
  },
  error: null,
  isLoading: false,
};
//REDUCERS
export const musicSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    clearMusic: (state) => {
      state.todo = {
        id: 0,
        title: "",
        singer: "",
        desc: "",
      };
    },
  },
  extraReducers: {
    //GET_MUSIC
    [getMusic.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    [getMusic.rejected]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    [getMusic.pending]: (state) => {
      state.isLoading = true;
    },
    //UPDATE_MUSIC
    [updateMusic.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    [updateMusic.pending]: (state) => {
      state.isLoading = true;
    },
    [updateMusic.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { clearTodo } = musicSlice.actions;
export default musicSlice.reducer;
