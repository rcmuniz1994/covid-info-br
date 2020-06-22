import { configureStore } from "@reduxjs/toolkit";
import { covidInfoPerStateSlice } from "../ducks/covidInfoPerStateSlice";
import { covidInfoBrSlice } from "../ducks/covidInforBrSlice";
import { filteringStateSlice } from "../ducks/filteringStateSlice";

const store = configureStore({
  reducer: {
    covidInfoPerState: covidInfoPerStateSlice.reducer,
    covidInfoBr: covidInfoBrSlice.reducer,
    fiteringState: filteringStateSlice.reducer,
  },
});

export default store;
