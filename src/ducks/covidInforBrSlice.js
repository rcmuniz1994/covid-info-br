import { createSlice } from "@reduxjs/toolkit";

export const covidInfoBrSlice = createSlice({
  name: "covidInfoBr",
  initialState: {
    values: {},
  },
  reducers: {
    setCovidInfoBr: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const { setCovidInfoBr } = covidInfoBrSlice.actions;

export default covidInfoBrSlice.reducer;
