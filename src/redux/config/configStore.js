import { configureStore } from "@reduxjs/toolkit";
import list from "../modules/listSlice";
import music from "../modules/musicSlice";
import detail from "../modules/detail";

const store = configureStore({
  reducer: {
    list: list,
    music: music,
    detail: detail,
  },
});

export default store;
