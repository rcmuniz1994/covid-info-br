import React from 'react';
import Table from 'react-bootstrap/Table'

function App() {
  const [covidInfoBr, setCovidInfoBr] = React.useState([]);
  
  React.useEffect(() => {
    fetch("http://covid19-brazil-api.now.sh/api/report/v1")
    .then(response => response.json())
    .then(covidData => setCovidInfoBr(Object.values(covidData.data)));    
  }, []);
  

  return (
    <ul>
      {covidInfoBr.map(stateInfo => {
        return <li key="stateInfo.uid">{stateInfo.state}</li>;
      })}
    </ul>
  );
}

export default App;
