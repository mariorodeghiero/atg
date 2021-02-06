import React from "react";
import * as S from "./styles";
import { connect } from "react-redux";

const SectionGameInformation = ({ data, races,success }) => {
  return (
    <>
      <h1>Game Information</h1>
      {success && races.map(({number, name, startTime}, index) => {
        return (
        <div key={index}>{`${number} - ${name} - ${startTime}`}</div>
        )
      })}
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.gameData.data,
  races: state.gameData.data.races,
  success: state.gameData.success
});

export default connect(mapStateToProps)(SectionGameInformation);


// User interface should contain input field to put game type in. Below the input field there should be
// the area where information about the game is presented.
// Information about the game should contain following data: - Game type - Races information (see
// below)
// For each race: - Race number - Race name - Race start time - Starts information (see below)
// For each start: - Start number - Horse name - Driver/rider first name + last name - Trainer first
// name + last name (expanded view) - Name of the horse father (expanded view)
// Information about start should be presented in expandable block (collapsed by default). The
// following information should be available in the expanded view: - Trainer first name + last name -
// Name of the horse father