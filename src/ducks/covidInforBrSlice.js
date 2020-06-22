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

const { setCovidInfoBr } = covidInfoBrSlice.actions;

export const retrievedCovidInfoBr = () => (dispatch) => {
  fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil")
    .then((response) => response.json())
    .then((covidDataBr) => {
      const retrievedCovidInfoBr = covidDataBr.data;
      dispatch(setCovidInfoBr(retrievedCovidInfoBr));
    });
};

export default covidInfoBrSlice.reducer;
