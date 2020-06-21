import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
import "moment/locale/pt-br";
import CovidCasesTable from "./CovidCasesTable";

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
      <Row>
        <Col>
          {`Atualizado em: ${moment(covidInfoBr.updated_at)
            .locale("pt-br")
            .format("L")} - ${moment(covidInfoBr.updated_at)
            .locale("pt-br")
            .format("LT")}`}
        </Col>
        <Col>{`Confirmados: ${covidInfoBr.confirmed}`}</Col>
        <Col>{`Em tratamento: ${covidInfoBr.cases}`}</Col>
        <Col>{`Recuperados: ${covidInfoBr.recovered}`}</Col>
        <Col>{`Mortes: ${covidInfoBr.deaths}`}</Col>
      </Row>
      <CovidCasesTable covidInfoPerState={covidInfoPerState} />
    </Container>
  );
}

export default App;
