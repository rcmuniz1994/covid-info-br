import React from "react";
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { retrievedCovidInfoPerState } from "./ducks/covidInfoPerStateSlice";
import { retrievedCovidInfoBr } from "./ducks/covidInforBrSlice";
import CovidCasesTable from "./CovidCasesTable";
import GeneralInfoCards from "./GeneralInfoCards";
import CovidForm from "./CovidForm";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const covidInfoPerState = useSelector(
    (state) => state.covidInfoPerState.items
  );
  const covidInfoBr = useSelector((state) => state.covidInfoBr.values);
  const stateName = useSelector((state) => state.fiteringState.stateName);

  React.useEffect(() => {
    dispatch(retrievedCovidInfoPerState());
    dispatch(retrievedCovidInfoBr());
  }, [dispatch]);

  const filteredInfo = covidInfoPerState.filter((s) =>
    s.state.toLowerCase().includes(stateName.toLowerCase())
  );
  return (
    <div>
      <Container>
        <h1>COVID-19: Brasil</h1>
        <GeneralInfoCards covidInfoBr={covidInfoBr} />
        <CovidInfoBrProgressbar covidInfoBr={covidInfoBr} />
        <CovidForm />
        <CovidCasesTable
          className="covid-table"
          covidInfoPerState={filteredInfo}
        />
      </Container>
    </div>
  );
}

const CovidInfoBrProgressbar = ({ covidInfoBr }) => {
  const recoveredPercentage = Math.round(
    (covidInfoBr.recovered / covidInfoBr.confirmed) * 100
  );
  const deathPercentage = Math.round(
    (covidInfoBr.deaths / covidInfoBr.confirmed) * 100
  );
  const activePercentage = Math.round(
    (covidInfoBr.cases / covidInfoBr.confirmed) * 100
  );
  return (
    <ProgressBar className="covid-progressbar">
      <ProgressBar
        className="text-dark font-weight-bold"
        striped
        variant="success"
        now={recoveredPercentage}
        label={`${recoveredPercentage}%`}
        key={1}
      />
      <ProgressBar
        className="text-dark font-weight-bold"
        striped
        variant="warning"
        now={activePercentage}
        label={`${activePercentage}%`}
        key={2}
      />
      <ProgressBar
        className="text-dark font-weight-bold"
        striped
        variant="danger"
        now={deathPercentage}
        label={`${deathPercentage}%`}
        key={3}
      />
    </ProgressBar>
  );
};

export default App;
