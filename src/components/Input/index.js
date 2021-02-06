import React, { useState } from "react";
import * as S from "./styles";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as GameScheduleActions from '../../store/ducks/game-schedule/actions';

const Input = (props) => {
  const [value, setValue] = useState("");
  const onFetchGame = () => {
    console.log("object")
    props.getGameScheduleRequest(`${value.toUpperCase()}`)
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      event.target.blur(event);
    }
  };
  
  return (
    <S.Input
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={(event) => handleKeyPress(event)}
      type="text"
      onBlur={onFetchGame}
    />
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators(GameScheduleActions, dispatch);

export default connect(null, mapDispatchToProps)(Input);
