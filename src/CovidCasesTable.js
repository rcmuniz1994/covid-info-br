import React from "react";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";
import { useGetCovidInfoPerStateQuery } from "./ducks/apiSlice";

const CovidCasesTable = ({ props }) => {
  const {
    data: covidInfoPerState,
    isLoading,
    error: isError,
  } = useGetCovidInfoPerStateQuery();

  const stateName = useSelector((state) => state.fiteringState.stateName);

  if (isLoading) {
    return <Alert variant="secondary">Carregando...</Alert>;
  }

  if (isError) {
    return <Alert variant="danger">Errou ao carregar os dados!</Alert>;
  }

  if (!covidInfoPerState) {
    return <></>;
  }

  const filteredInfo = covidInfoPerState.filter((s) =>
    s.state.toLowerCase().includes(stateName.toLowerCase())
  );

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Estado</th>
          <th>Casos confirmados</th>
          <th>Óbitos</th>
        </tr>
      </thead>
      <tbody>
        {filteredInfo.map((stateInfo) => (
          <tr key={stateInfo.uid}>
            <td>{stateInfo.state}</td>
            <td>{stateInfo.cases}</td>
            <td>{stateInfo.deaths}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CovidCasesTable;
