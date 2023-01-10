import { configureStore } from "@reduxjs/toolkit";
import list from "../modules/listSlice";
import music from "../modules/music";

const store = configureStore({
  reducer: {
    list,
    music,
  },
});

export default store;
