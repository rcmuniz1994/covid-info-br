import React from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import { setStateName } from "./ducks/filteringStateSlice";

const CovidForm = (props) => {
  const dispatch = useDispatch();

  const filteringStatePerName = (event) => {
    dispatch(setStateName(event.target.value));
  };

  return (
    <Form className="covid-form">
      <Form.Group controlId="covidCasesForm">
        <Form.Label>
          <strong>Estado:</strong>
        </Form.Label>
        <Form.Control
          type="text"
          onChange={filteringStatePerName}
          placeholder="Digite o nome do estado de interesse"
        />
      </Form.Group>
    </Form>
  );
};

export default CovidForm;
