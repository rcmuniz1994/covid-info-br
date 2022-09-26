import React from "react";
import Container from "react-bootstrap/Container";
import { Paper, Typography, Box } from "@material-ui/core";
import CovidCasesTable from "./CovidCasesTable";
import GeneralInfoCards from "./GeneralInfoCards";
import CovidInfoBrProgressbar from "./CovidInfoBrProgressbar";
import CovidForm from "./CovidForm";
import "./App.css";
import { useGetCovidInfoBrQuery } from "./ducks/apiSlice";

function App() {
  const {
    data: covidInfoBr,
    isLoading,
    error: isError,
  } = useGetCovidInfoBrQuery();

  return (
    <div id="panel-background">
      <Box ml={20} mr={20}>
        <Paper>
          <Container>
            <Box m={5}>
              <br />
              <Typography variant="h2" id="title">
                COVID-19: Brasil
              </Typography>
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
          <br />
        </Paper>
      </Box>
    </div>
  );
}

export default App;
