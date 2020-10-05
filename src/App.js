import React from "react";
import Container from "react-bootstrap/Container";
import { Paper, Typography, Box } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { retrievedCovidInfoBr } from "./ducks/covidInforBrSlice";
import CovidCasesTable from "./CovidCasesTable";
import GeneralInfoCards from "./GeneralInfoCards";
import CovidInfoBrProgressbar from "./CovidInfoBrProgressbar";
import CovidForm from "./CovidForm";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { isLoading, isError, values: covidInfoBr } = useSelector(
    (state) => state.covidInfoBr
  );

  React.useEffect(() => {
    dispatch(retrievedCovidInfoBr());
  }, [dispatch]);

  return (
    <div id="panel-background">
      <Box ml={20} mr={20}>
        <Paper>
          <Container>
            <Box m={5}>
              <br/>
              <Typography variant="h2" id="title">COVID-19: Brasil</Typography>
            </Box>
            <GeneralInfoCards
              covidInfoBr={covidInfoBr}
              isLoading={isLoading}
              isError={isError}
            />
            <CovidInfoBrProgressbar
              covidInfoBr={covidInfoBr}
              isLoading={isLoading}
              isError={isError}
            />
            <CovidForm />
            <CovidCasesTable className="covid-table" />
          </Container>
          <br/>
        </Paper>
      </Box>
    </div>
  );
}

export default App;
