import { createSlice } from "@reduxjs/toolkit";

export const covidInfoBrSlice = createSlice({
  name: "covidInfoBr",
  initialState: {
    isLoading: false,
    isError: false,
    values: {},
  },
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    setError: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    setCovidInfoBr: (state, action) => {
      state.values = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
  },
});

const { setCovidInfoBr, setLoading, setError } = covidInfoBrSlice.actions;

export const retrievedCovidInfoBr = () => (dispatch) => {
  dispatch(setLoading());
  fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil")
    .then((response) => response.json())
    .then((covidDataBr) => {
      const retrievedCovidInfoBr = covidDataBr.data;
      dispatch(setCovidInfoBr(retrievedCovidInfoBr));
    })
    .catch(() => dispatch(setError()));
};

export default covidInfoBrSlice.reducer;
