import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CovidCasesTable from "./CovidCasesTable";
import GeneralInfoCards from "./GeneralInfoCards";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setCovidInfoPerState } from "./ducks/covidInfoPerStateSlice";
import { setCovidInfoBr } from "./ducks/covidInforBrSlice";

function App() {
  const dispatch = useDispatch();
  const covidInfoPerState = useSelector(
    (state) => state.covidInfoPerState.items
  );
  const covidInfoBr = useSelector((state) => state.covidInfoBr.values);

  React.useEffect(() => {
    fetch("http://covid19-brazil-api.now.sh/api/report/v1")
      .then((response) => response.json())
      .then((covidDataPerState) => {
        const retrievedCovidInfoPerState = covidDataPerState.data;
        dispatch(setCovidInfoPerState(retrievedCovidInfoPerState));
      });

    fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil")
      .then((response) => response.json())
      .then((covidDataBr) => {
        const retrievedCovidInfoBr = covidDataBr.data;
        dispatch(setCovidInfoBr(retrievedCovidInfoBr));
      });
  }, [dispatch]);

  return (
    <Container>
      <h1>COVID-19: Brasil</h1>
      <GeneralInfoCards covidInfoBr={covidInfoBr} />
      <Row className="covid-table">
        <Col>
          <CovidCasesTable covidInfoPerState={covidInfoPerState} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
