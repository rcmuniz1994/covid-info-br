import { createSlice } from "@reduxjs/toolkit";

export const covidInfoPerStateSlice = createSlice({
  name: "covidInfoPerState",
  initialState: {
    isLoading: false,
    isError: false,
    items: [],
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
    setCovidInfoPerState: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
  },
});

const {
  setCovidInfoPerState,
  setLoading,
  setError,
} = covidInfoPerStateSlice.actions;

export const retrievedCovidInfoPerState = () => (dispatch) => {
  dispatch(setLoading());
  fetch("https://covid19-brazil-api.now.sh/api/report/v1")
    .then((response) => response.json())
    .then((covidDataPerState) => {
      const retrievedCovidInfoPerState = covidDataPerState.data;
      dispatch(setCovidInfoPerState(retrievedCovidInfoPerState));
    })
    .catch(() => dispatch(setError()));
};

export default covidInfoPerStateSlice.reducer;
