import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CovidCasesTable from "./CovidCasesTable";
import GeneralInfoCards from "./GeneralInfoCards";
import "./App.css";

function App() {
  const [covidInfoPerState, setCovidInfoPerState] = React.useState([]);
  const [covidInfoBr, setCovidInfoBr] = React.useState({});

  React.useEffect(() => {
    fetch("http://covid19-brazil-api.now.sh/api/report/v1")
      .then((response) => response.json())
      .then((covidDataPerState) =>
        setCovidInfoPerState(Object.values(covidDataPerState.data))
      );

    fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil")
      .then((response) => response.json())
      .then((covidDataBr) => setCovidInfoBr(covidDataBr.data));
  }, []);

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
