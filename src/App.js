import React from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { retrievedCovidInfoBr } from "./ducks/covidInforBrSlice";
import CovidCasesTable from "./CovidCasesTable";
import GeneralInfoCards from "./GeneralInfoCards";
import CovidInfoBrProgressbar from "./CovidInfoBrProgressbar";
import CovidForm from "./CovidForm";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { isLoading, isError, values: covidInfoBr } = useSelector(
    (state) => state.covidInfoBr
  );

  React.useEffect(() => {
    dispatch(retrievedCovidInfoBr());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <h1>COVID-19: Brasil</h1>
        <GeneralInfoCards
          covidInfoBr={covidInfoBr}
          isLoading={isLoading}
          isError={isError}
        />
        <CovidInfoBrProgressbar
          covidInfoBr={covidInfoBr}
          isLoading={isLoading}
          isError={isError}
        />
        <CovidForm />
        <CovidCasesTable className="covid-table" />
      </Container>
    </div>
  );
}

export default App;
