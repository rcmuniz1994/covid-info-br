import { createSlice } from "@reduxjs/toolkit";

export const covidInfoPerStateSlice = createSlice({
  name: "covidInfoPerState",
  initialState: {
    items: [],
  },
  reducers: {
    setCovidInfoPerState: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setCovidInfoPerState } = covidInfoPerStateSlice.actions;

export default covidInfoPerStateSlice.reducer;
