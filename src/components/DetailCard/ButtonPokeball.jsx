import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const Zoom = keyframes`
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.05, 1.05);
  }
  100% {
    transform: scale(1, 1);
  }
`;

const Container = styled.div`
  background-color: black;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transition: all 0.25s ease-in-out;
  top: 80%;
  transform-origin: center bottom;
  transition: transform 0.2s;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
  animation: ${Zoom} 2s ease-out infinite;
`;

const Top = styled.div`
  background-color: red;
  width: 90px;
  height: 43px;
  border-radius: 45px 45px 0 0;
  position: relative;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

const Buttom = styled.div`
  background-color: white;
  width: 90px;
  height: 43px;
  border-radius: 0 0 45px 45px;
  position: relative;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

const CentreBlack = styled.div`
  width: 40px;
  height: 40px;
  background: black;
  position: relative;
  border-radius: 50%;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const CentreWhite = styled.div`
  width: 30px;
  height: 30px;
  background: white;
  position: relative;
  border-radius: 50%;
  top: -32%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export function Pokeball() {
  return (
    <Container>
      <Top></Top>
      <CentreBlack></CentreBlack>
      <CentreWhite></CentreWhite>
      <Buttom></Buttom>
    </Container>
  );
}
