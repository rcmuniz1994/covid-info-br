import React from "react";
import Table from "react-bootstrap/Table";

const CovidCasesTable = ({ covidInfoPerState, setSelectedState, ...props }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Estado</th>
          <th>Casos confirmados</th>
          <th>Óbitos</th>
        </tr>
      </thead>
      <tbody>
        {covidInfoPerState.map((stateInfo) => (
          <tr key={stateInfo.uid}>
            <td onClick={() => setSelectedState(stateInfo.uf)}>
              {stateInfo.state}
            </td>
            <td>{stateInfo.cases}</td>
            <td>{stateInfo.deaths}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CovidCasesTable;
