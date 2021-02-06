import React from "react";
import * as S from "./styles";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GameDataActions from '../../store/ducks/game-data/actions';

const Race = (props) => {

  const onFetchRace = () => {
   props.getGameDataRequest(props.id)
  }

  return (
    <li onClick={() => onFetchRace()}>
      {props.id} - {props.startTime}
    </li>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators(GameDataActions, dispatch);

export default connect(null, mapDispatchToProps)(Race);
