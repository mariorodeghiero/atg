import React from "react";
import * as S from "./styles";
import ATG from "../../atg.se";

const Loader = ({ showLogo }) => {
  return (
    <S.Container showLogo={showLogo}>
      { showLogo && <S.ImageSection>
        <S.Image image={ATG} />
      </S.ImageSection>
      }
      <S.PreloaderSection>
        <S.BubbleLoader>
          <div />
          <div />
          <div />
        </S.BubbleLoader>
      </S.PreloaderSection>
    </S.Container>
  );
};

export default Loader;
