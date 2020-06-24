import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./App.css";

const CovidInfoBrProgressbar = ({ covidInfoBr, isLoading, isError }) => {
  const recoveredPercentage = Math.round(
    (covidInfoBr.recovered / covidInfoBr.confirmed) * 100
  );
  const deathPercentage = Math.round(
    (covidInfoBr.deaths / covidInfoBr.confirmed) * 100
  );
  const activePercentage = Math.round(
    (covidInfoBr.cases / covidInfoBr.confirmed) * 100
  );

  if (isLoading) {
    return (
      <ProgressBar className="covid-progressbar">
        <ProgressBar
          className="text-dark font-weight-bold"
          striped
          animated
          now={100}
          label={"Carregando..."}
        />
      </ProgressBar>
    );
  }

  if (isError) {
    return (
      <ProgressBar className="covid-progressbar">
        <ProgressBar
          className="text-dark font-weight-bold"
          striped
          animated
          variant="danger"
          now={100}
        />
      </ProgressBar>
    );
  }

  return (
    <ProgressBar className="covid-progressbar">
      <ProgressBar
        className="text-dark font-weight-bold"
        striped
        variant="success"
        now={recoveredPercentage}
        label={`${recoveredPercentage}%`}
        key={1}
      />
      <ProgressBar
        className="text-dark font-weight-bold"
        striped
        variant="warning"
        now={activePercentage}
        label={`${activePercentage}%`}
        key={2}
      />
      <ProgressBar
        className="text-dark font-weight-bold"
        striped
        variant="danger"
        now={deathPercentage}
        label={`${deathPercentage}%`}
        key={3}
      />
    </ProgressBar>
  );
};

export default CovidInfoBrProgressbar;
