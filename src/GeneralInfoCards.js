import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import moment from "moment";
import "moment/locale/pt-br";

const GeneralInfoCards = ({ covidInfoBr, isLoading, isError, ...props }) => {
  if (isError) {
    return (
      <Alert variant="danger">Erro ao carregar os dados gerais do Brasil</Alert>
    );
  }

  return (
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>
              <strong>Atualizado em:</strong>
            </Card.Title>
            <Card.Text>
              {(isLoading && "Carregando...") ||
                (covidInfoBr &&
                  `${moment(covidInfoBr.updated_at)
                    .locale("pt-br")
                    .format("L")} - ${moment(covidInfoBr.updated_at)
                    .locale("pt-br")
                    .format("LT")}`)}
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
            <Card.Text>
              {(isLoading && "Carregando...") ||
                (covidInfoBr && `${covidInfoBr.confirmed}`)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body id="covid-cards-cases">
            <Card.Title>
              <strong>Ativos:</strong>
            </Card.Title>
            <Card.Text>
              {(isLoading && "Carregando...") ||
                (covidInfoBr && `${covidInfoBr.cases}`)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body id="covid-cards-recovered">
            <Card.Title>
              <strong>Recuperados:</strong>
            </Card.Title>
            <Card.Text>
              {(isLoading && "Carregando...") ||
                (covidInfoBr && `${covidInfoBr.recovered}`)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body id="covid-cards-deaths">
            <Card.Title>
              <strong>Mortes:</strong>
            </Card.Title>
            <Card.Text>
              {(isLoading && "Carregando...") ||
                (covidInfoBr && `${covidInfoBr.deaths}`)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default GeneralInfoCards;
