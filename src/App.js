import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function App() {
  const [covidInfoBr, setCovidInfoBr] = React.useState([]);
  
  React.useEffect(() => {
    fetch("http://covid19-brazil-api.now.sh/api/report/v1")
    .then(response => response.json())
    .then(covidData => setCovidInfoBr(Object.values(covidData.data)));    
  }, []);
  

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Estado</th>
            <th>Casos confirmados</th>
            <th>Casos suspeitos</th>
            <th>Óbitos</th>
          </tr>
        </thead>
        <tbody>
          {covidInfoBr.map(stateInfo => (
            <tr>
              <td>{stateInfo.state}</td>
              <td>{stateInfo.cases}</td>
              <td>{stateInfo.suspects}</td>
              <td>{stateInfo.deaths}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
