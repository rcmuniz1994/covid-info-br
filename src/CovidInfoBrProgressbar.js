import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./App.css";

const CovidInfoBrProgressbar = ({ covidInfoBr, isLoading, isError }) => {
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

  if (!covidInfoBr) {
    return <></>;
  }

  const recoveredPercentage = Math.round(
    (covidInfoBr.recovered / covidInfoBr.confirmed) * 100
  );
  const deathPercentage = Math.round(
    (covidInfoBr.deaths / covidInfoBr.confirmed) * 100
  );
  const activePercentage = Math.round(
    (covidInfoBr.cases / covidInfoBr.confirmed) * 100
  );

  return (
    <ProgressBar className="covid-progressbar">
      <ProgressBar
        className="text-dark font-weight-bold"
        striped
        variant="success"
        now={recoveredPercentage}
        animated
        label={`${recoveredPercentage}%`}
        key={1}
      />
      <ProgressBar
        className="text-dark font-weight-bold"
        striped
        variant="warning"
        now={activePercentage}
        animated
        label={`${activePercentage}%`}
        key={2}
      />
      <ProgressBar
        className="text-dark font-weight-bold"
        striped
        variant="danger"
        now={deathPercentage}
        animated
        label={`${deathPercentage}%`}
        key={3}
      />
    </ProgressBar>
  );
};

export default CovidInfoBrProgressbar;
