import React from "react";
import * as S from "./styles";
import { connect } from "react-redux";
import CollapsibleTable from "../Table";

const SectionGameInformation = ({ data, races, success, error }) => {
  return (
    <S.Wrapper>
      <S.SubTitle>Game Information</S.SubTitle>
      {success && <CollapsibleTable races={races}/>}
      {console.log("te", success)}
    </S.Wrapper>
  );
};

const mapStateToProps = (state) => ({
  races: state.gameData.data.races,
  success: state.gameData.success,
  error: state.gameData.error
});

export default connect(mapStateToProps)(SectionGameInformation);
