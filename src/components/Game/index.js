import React from "react";
import * as S from "./styles";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GameDataActions from '../../store/ducks/game-data/actions';

const Game = (props) => {

  const onFetchRace = () => {
   props.getGameDataRequest(props.id)
  }

  return (
    <S.ListItem onClick={() => onFetchRace()}>
      {props.id} - {props.startTime}
    </S.ListItem>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators(GameDataActions, dispatch);

export default connect(null, mapDispatchToProps)(Game);
