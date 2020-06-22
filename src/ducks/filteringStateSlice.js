import { createSlice } from "@reduxjs/toolkit";

export const filteringStateSlice = createSlice({
  name: "fiteringState",
  initialState: {
    stateName: "",
  },
  reducers: {
    setStateName: (state, action) => {
      state.stateName = action.payload;
    },
  },
});

export const { setStateName } = filteringStateSlice.actions;

export default filteringStateSlice.reducer;
