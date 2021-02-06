import React from "react";
import Race from "../Race";
import * as S from "./styles";
import { connect } from "react-redux";

const SectionRace = ({ upcoming, results, loading, error }) => {
  return (
    <>
      {upcoming && (
        <ul>
          {upcoming.length > 0
            ? upcoming.map(({ id, startTime }, index) => (
                <>
                  <Race key={index} id={id} startTime={startTime} />
                  <br />
                </>
              ))
            : results.map(({ id, startTime }, index) => (
                <>
                  <Race key={index} id={id} startTime={startTime} />
                  <br />
                </>
              ))}
        </ul>
      )}

      {loading && "Loading..."}
      {error && "Failed !!!"}
    </>
  );
};

const mapStateToProps = (state) => ({
  upcoming: state.gameSchedule.data.upcoming,
  results: state.gameSchedule.data.results,
  loading: state.gameSchedule.loading,
  error: state.gameSchedule.error,
});

export default connect(mapStateToProps)(SectionRace);
