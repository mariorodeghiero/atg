import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-items: center;
  margin-top: ${(props) => props.showLogo ? "20rem" : "15rem"};
`;

export const ImageSection = styled.div`
  margin: 0 0 16px 0;
`;

export const PreloaderSection = styled.div`
  margin-left: -6px;
`;

export const Image = styled.div`
  width: 90px;
  height: 90px;
  background-image: url(${(props) => props.image && props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  opacity: 0.9;
`;

export const BubbleLoader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 32px);
  grid-column-gap: 16px;
  grid-template-columns: repeat(3, 8px);
  grid-column-gap: 12px;
  div {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background: var(--blue);
    opacity: 0.9;
    -webkit-animation: bounce 1.48s ease-in-out infinite both;
    animation: bounce 1.48s ease-in-out infinite both;
    width: 16px;
    height: 16px;
    :nth-child(1) {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }
    :nth-child(2) {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }
    @-webkit-keyframes bounce {
      0%,
      80%,
      100% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      40% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
    @keyframes bounce {
      0%,
      80%,
      100% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      40% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
    @-webkit-keyframes beat {
      to {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
      }
    }
    @keyframes beat {
      to {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
      }
    }
  }
`;
