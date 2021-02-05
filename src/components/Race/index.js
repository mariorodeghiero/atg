import React from "react";
import * as S from "./styles";

const Race = ({ id, startTime }) => {

  return (
    <li onClick={() => console.log("test")}>
      {id} - {startTime}
    </li>
  );
};

export default Race;
