import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import moment from "moment";
import "moment/locale/pt-br";

const GeneralInfoCards = ({ covidInfoBr, ...props }) => {
  return (
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
          <Card.Body id="covid-cards-cases">
            <Card.Title>
              <strong>Em tratamento:</strong>
            </Card.Title>
            <Card.Text>{`${covidInfoBr.cases}`}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body id="covid-cards-recovered">
            <Card.Title>
              <strong>Recuperados:</strong>
            </Card.Title>
            <Card.Text>{`${covidInfoBr.recovered}`}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Body id="covid-cards-deaths">
            <Card.Title>
              <strong>Mortes:</strong>
            </Card.Title>
            <Card.Text>{`${covidInfoBr.deaths}`}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default GeneralInfoCards;
