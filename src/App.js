import React from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { retrievedCovidInfoPerState } from "./ducks/covidInfoPerStateSlice";
import { retrievedCovidInfoBr } from "./ducks/covidInforBrSlice";
import CovidCasesTable from "./CovidCasesTable";
import GeneralInfoCards from "./GeneralInfoCards";
import CovidInfoBrProgressbar from "./CovidInfoBrProgressbar";
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

export default App;
