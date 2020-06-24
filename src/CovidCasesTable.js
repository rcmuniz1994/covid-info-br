import React from "react";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { retrievedCovidInfoPerState } from "./ducks/covidInfoPerStateSlice";

const CovidCasesTable = ({ props }) => {
  const dispatch = useDispatch();
  const { isLoading, isError, items: covidInfoPerState } = useSelector(
    (state) => state.covidInfoPerState
  );

  const stateName = useSelector((state) => state.fiteringState.stateName);

  React.useEffect(() => {
    dispatch(retrievedCovidInfoPerState());
  }, [dispatch]);

  const filteredInfo = covidInfoPerState.filter((s) =>
    s.state.toLowerCase().includes(stateName.toLowerCase())
  );

  if (isLoading) {
    console.log("is loading: ", isLoading);
    return <Alert variant="secondary">Carregando...</Alert>;
  }

  if (isError) {
    console.log("is error: ", isError);
    return <Alert variant="danger">Errou ao carregar os dados!</Alert>;
  }

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
