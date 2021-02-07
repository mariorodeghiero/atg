import { connect } from "react-redux";

import Game from "../Game";
import * as S from "./styles";

const SectionResults = ({ upcoming, results, loading, error, success }) => {
  return (
    <S.Wrapper>
      {success && (
        <>
          <S.SubTitle>Upcoming {upcoming.length} results</S.SubTitle>
          {upcoming && (
            <ul>
              {upcoming.length > 0
                ? upcoming.map(({ id, startTime }, index) => (
                    <Game key={index} id={id} startTime={startTime} />
                  ))
                : results.map(({ id, startTime }, index) => (
                    <Game key={index} id={id} startTime={startTime} />
                  ))}
            </ul>
          )}
        </>
      )}
      {loading && "Loading..."}
      {error && "Failed !!!"}
    </S.Wrapper>
  );
};

const mapStateToProps = (state) => ({
  upcoming: state.gameSchedule.data.upcoming,
  results: state.gameSchedule.data.results,
  loading: state.gameSchedule.loading,
  error: state.gameSchedule.error,
  success: state.gameSchedule.success,
});

export default connect(mapStateToProps)(SectionResults);
