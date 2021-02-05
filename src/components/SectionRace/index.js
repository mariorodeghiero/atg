import React from "react";
import Race from "../Race";
import * as S from "./styles";

const SectionRace = ({ races }) => {
  return (
    <ul>
      {races.map(({id, startTime}, index) => (
        <>
          <Race key={index} id={id} startTime={startTime} />
          <br />
        </>
      ))}
    </ul>
  );
};

export default SectionRace;
