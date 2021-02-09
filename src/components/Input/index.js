import React, { useState } from "react";
import * as S from "./styles";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchOutlined from '@material-ui/icons/SearchOutlined';

import * as GameScheduleActions from '../../store/ducks/game-schedule/actions';
import * as GameDataActions from '../../store/ducks/game-data/actions';

const Input = (props) => {
  const [value, setValue] = useState("");
  const onFetchGame = (e) => {
    e.preventDefault()
    props.resetGameDataState()
    props.getGameScheduleRequest(`${value.toUpperCase()}`)
  };
  
  return (
    <S.Wrapper onSubmit={(e) => onFetchGame(e)}>
      <S.Search>
        <label htmlFor="search">
          <SearchOutlined style={{ fontSize: 32, color: "gray" }} />
        </label>
        <S.Input
          id="search"
          onChange={(event) => setValue(event.target.value)}
          type="text"
          placeholder="e.g V4, V64, V75"
          required
          />
      </S.Search>
      <div>
        <S.Button type="submit">SEARCH</S.Button>
      </div>
    </S.Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({...GameScheduleActions, ...GameDataActions}, dispatch);

export default connect(null, mapDispatchToProps)(Input);
