import React, { useState } from "react";
import * as S from "./styles";

const Input = () => {
  const [value, setValue] = useState("");
  const onFetchGame = () => {
    fetch(
      `https://www.atg.se/services/racinginfo/v1/api/products/${value.toUpperCase()}`
    )
      .then((response) => response.json())
      .then((response) => console.log(response));
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

export default Input;
