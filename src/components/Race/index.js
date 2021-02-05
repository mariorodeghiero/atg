import React from "react";
import * as S from "./styles";

const Race = ({ id, startTime }) => {

  const onFetchRace = (id) => {
    fetch(`https://www.atg.se/services/racinginfo/v1/api/games/${id}`)
    .then(response => response.json())
    .then(response => console.log(response))
  }

  return (
    <li onClick={() => onFetchRace(id)}>
      {id} - {startTime}
    </li>
  );
};

export default Race;
