import { configureStore } from "@reduxjs/toolkit";
import { covidInfoPerStateSlice } from "../ducks/covidInfoPerStateSlice";
import { covidInfoBrSlice } from "../ducks/covidInforBrSlice";

const store = configureStore({
  reducer: {
    covidInfoPerState: covidInfoPerStateSlice.reducer,
    covidInfoBr: covidInfoBrSlice.reducer,
  },
});

export default store;
