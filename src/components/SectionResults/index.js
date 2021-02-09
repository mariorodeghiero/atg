import React, { useState } from "react";
import { connect } from "react-redux";
import FailedMessage from "../FailedMessage";

import Game from "../Game";
import Loader from "../Loader";
import * as S from "./styles";

const SectionResults = ({ upcoming, results, loading, error, success, betType }) => {
  const [ gameSelected, setGameSelected ] = useState("")

  return (
    <S.Wrapper>
      {success && (
        <>
          <S.SubTitle>Closest {upcoming.length > 0 ? `Upcoming ${upcoming.length}` : `results ${results.length}`}</S.SubTitle>
          {upcoming && (
            <S.List>
              {upcoming.length > 0
                ? upcoming.map(({ id, startTime }, index) => (
                    <Game key={index} betType={betType} id={id} startTime={startTime} setGameSelected={setGameSelected} gameSelected={gameSelected}/>
                  ))
                : results.map(({ id, startTime }, index) => (
                    <Game key={index} betType={betType} id={id} startTime={startTime}  setGameSelected={setGameSelected} gameSelected={gameSelected}/>
                  ))}
            </S.List>
          )}
        </>
      )}
      {loading && !error && !success && <Loader showLogo/>}
      {error && !success && !loading && <FailedMessage/>}
    </S.Wrapper>
  );
};

const mapStateToProps = (state) => ({
  betType: state.gameSchedule.data.betType,
  upcoming: state.gameSchedule.data.upcoming,
  results: state.gameSchedule.data.results,
  loading: state.gameSchedule.loading,
  error: state.gameSchedule.error,
  success: state.gameSchedule.success,
});

export default connect(mapStateToProps)(SectionResults);
