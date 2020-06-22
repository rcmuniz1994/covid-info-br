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

const { setCovidInfoPerState } = covidInfoPerStateSlice.actions;

export const retrievedCovidInfoPerState = () => (dispatch) => {
  fetch("http://covid19-brazil-api.now.sh/api/report/v1")
    .then((response) => response.json())
    .then((covidDataPerState) => {
      const retrievedCovidInfoPerState = covidDataPerState.data;
      dispatch(setCovidInfoPerState(retrievedCovidInfoPerState));
    });
};

export default covidInfoPerStateSlice.reducer;
