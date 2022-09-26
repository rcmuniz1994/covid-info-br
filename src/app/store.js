import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../ducks/apiSlice";
import { filteringStateSlice } from "../ducks/filteringStateSlice";

const store = configureStore({
  reducer: {
    fiteringState: filteringStateSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;
