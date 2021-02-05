import React from "react";
import * as S from "./styles";

const SectionRace = ({ races }) => {
  return (
    <div>
      {races.map((race, index) => (
        <ul>
            <li>{race.id}</li>
            <li>{race.startTime}</li>
            <br></br>
        </ul>
      ))}
    </div>
  );
};

export default SectionRace;
