import React, { useState } from "react";
import * as S from "./styles";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchOutlined from '@material-ui/icons/SearchOutlined';

import * as GameScheduleActions from '../../store/ducks/game-schedule/actions';
import * as GameDataActions from '../../store/ducks/game-data/actions';

const Input = (props) => {
  const [value, setValue] = useState("");
  const onFetchGame = () => {
    props.resetGameDataState()
    props.getGameScheduleRequest(`${value.toUpperCase()}`)
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      onFetchGame();
    }
  };
  
  return (
    <S.Wrapper>
      <S.Search>
        <label htmlFor="search">
          <SearchOutlined style={{ fontSize: 32 }} />
        </label>
        <S.Input
          id="search"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => handleKeyPress(event)}
          type="text"
          placeholder="e.g V4, V64, V75"
          />
      </S.Search>
      <div>
        <S.Button onClick={onFetchGame}>SEARCH</S.Button>
      </div>
    </S.Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({...GameScheduleActions, ...GameDataActions}, dispatch);

export default connect(null, mapDispatchToProps)(Input);
