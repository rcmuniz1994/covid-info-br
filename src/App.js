import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import moment from "moment";
import "moment/locale/pt-br";
import CovidCasesTable from "./CovidCasesTable";
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
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <strong>Atualizado em:</strong>
              </Card.Title>
              <Card.Text>
                {`${moment(covidInfoBr.updated_at)
                  .locale("pt-br")
                  .format("L")} - ${moment(covidInfoBr.updated_at)
                  .locale("pt-br")
                  .format("LT")}`}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <strong>Confirmados:</strong>
              </Card.Title>
              <Card.Text>{`${covidInfoBr.confirmed}`}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <strong>Em tratamento:</strong>
              </Card.Title>
              <Card.Text>{`${covidInfoBr.cases}`}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <strong>Recuperados:</strong>
              </Card.Title>
              <Card.Text>{`${covidInfoBr.recovered}`}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <strong>Mortes:</strong>
              </Card.Title>
              <Card.Text>{`Mortes: ${covidInfoBr.deaths}`}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="covid-table">
        <Col>
          <CovidCasesTable covidInfoPerState={covidInfoPerState} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
