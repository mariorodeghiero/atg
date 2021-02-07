import React from "react";
import * as S from "./styles";
import { connect } from "react-redux";
import CollapsibleTable from "../Table";

const SectionGameInformation = ({ data, races,success }) => {
  return (
    <S.Wrapper>
      <h1>Game Information</h1>
      {success && <CollapsibleTable races={races}/>}
    </S.Wrapper>
  );
};

const mapStateToProps = (state) => ({
  races: state.gameData.data.races,
  success: state.gameData.success
});

export default connect(mapStateToProps)(SectionGameInformation);
