import React from "react";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { retrievedCovidInfoPerState } from "./ducks/covidInfoPerStateSlice";
import { retrievedCovidInfoBr } from "./ducks/covidInforBrSlice";
import CovidCasesTable from "./CovidCasesTable";
import GeneralInfoCards from "./GeneralInfoCards";
import CovidForm from "./CovidForm";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const covidInfoPerState = useSelector(
    (state) => state.covidInfoPerState.items
  );
  const covidInfoBr = useSelector((state) => state.covidInfoBr.values);
  const stateName = useSelector((state) => state.fiteringState.stateName);
  const [selectedState, setSelectedState] = React.useState(null);

  React.useEffect(() => {
    dispatch(retrievedCovidInfoPerState());
    dispatch(retrievedCovidInfoBr());
  }, [dispatch]);

  const filteredInfo = covidInfoPerState.filter((s) =>
    s.state.toLowerCase().includes(stateName.toLowerCase())
  );
  return (
    <div>
      <Container>
        <h1>COVID-19: Brasil</h1>
        <GeneralInfoCards covidInfoBr={covidInfoBr} />
        <CovidForm />
        <CovidCasesTable
          className="covid-table"
          setSelectedState={setSelectedState}
          covidInfoPerState={filteredInfo}
        />
      </Container>
      {selectedState && (
        <StateInfoDialog
          selectedState={selectedState}
          onClose={() => setSelectedState(null)}
        />
      )}
    </div>
  );
}

const StateInfoDialog = ({ selectedState, onClose, ...props }) => {
  const covidInfoPerState = useSelector(
    (state) => state.covidInfoPerState.items
  );
  const stateInfo = covidInfoPerState.filter((s) => s.uf === selectedState);
  return (
    <Modal show onHide={onClose} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>{stateInfo[0].state}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{`Casos confirmados: ${stateInfo[0].cases}`}</p>
        <p>{`Casos descartados: ${stateInfo[0].refuses}`}</p>
        <p>{`Casos suspeitos: ${stateInfo[0].suspects}`}</p>
        <p>{`Mortes: ${stateInfo[0].deaths}`}</p>
      </Modal.Body>
    </Modal>
  );
};

export default App;
