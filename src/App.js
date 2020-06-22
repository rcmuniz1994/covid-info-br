import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CovidCasesTable from "./CovidCasesTable";
import GeneralInfoCards from "./GeneralInfoCards";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { retrievedCovidInfoPerState } from "./ducks/covidInfoPerStateSlice";
import { retrievedCovidInfoBr } from "./ducks/covidInforBrSlice";

function App() {
  const dispatch = useDispatch();
  const covidInfoPerState = useSelector(
    (state) => state.covidInfoPerState.items
  );
  const covidInfoBr = useSelector((state) => state.covidInfoBr.values);

  React.useEffect(() => {
    dispatch(retrievedCovidInfoPerState());
    dispatch(retrievedCovidInfoBr());
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
