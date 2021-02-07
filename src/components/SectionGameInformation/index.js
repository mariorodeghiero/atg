import React from "react";
import * as S from "./styles";
import { connect } from "react-redux";
import CollapsibleTable from "../Table";
import Loader from "../Loader";

const SectionGameInformation = ({ races, success, error, loading }) => {
  return (
    <S.Wrapper>
      {(success || loading) && <S.SubTitle>Game Information</S.SubTitle>}
      {success && <S.TableWrapper><CollapsibleTable races={races} /></S.TableWrapper>}
      {loading && <Loader/>}
    </S.Wrapper>
  );
};

const mapStateToProps = (state) => ({
  races: state.gameData.data.races,
  success: state.gameData.success,
  error: state.gameData.error,
  loading: state.gameData.loading,
});

export default connect(mapStateToProps)(SectionGameInformation);
