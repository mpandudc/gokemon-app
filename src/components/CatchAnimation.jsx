import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

const wiggle = keyframes`
    0% {
        transform: rotate(0);
    }
    10% {
        transform: rotate(-15deg);
    }
    20% {
        transform: rotate(15deg);
    }
    30% {
        transform: rotate(-15deg);
    }
    50% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(0);
    }
`;

const throwball = keyframes`
0% {
    top: 150%;
    left: 20%;
    transform: scale(0.5);
  }
  35% {
    top: 40%;
    left: 41%;
    transform: scale(1.2);
  }
  40% {
    top: 37%;
    left: 42%;
    transform: scale(1.3);
  }
  42.5% {
    top: 38.5%;
    left: 42.5%;
    transform: scale(1.3);
  }
  85% {
    top: 38.5%;
    left: 42.5%;
    transform: scale(1.3);
  }
  100% {
    top: 40%;
    left: 40%;
    transform: scale(1);
  }
  `;

const catchPokemon = keyframes`
  0% {
    background: rgba(0, 0, 0, 0.2);
  }
  100% {
    background: rgba(0, 0, 0, 0.7);
  }
  `;

const Container = styled.div`
  overflow: hidden;
  border: solid black;
  height: 100%;
  width: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.83);
  z-index: 200;
  top: 0;
`;

const Pokeball = styled.div`
  background-color: black;
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transition: all 0.25s ease-in-out;
  top: 40%;
  left: 40%;
  transform-origin: center bottom;
  animation: ${throwball} 2s 1, ${wiggle} 1s 3 2s;
`;

const Top = styled.div`
  background-color: red;
  width: 90px;
  height: 43px;
  border-radius: 45px 45px 0 0;
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;
`;

const Buttom = styled.div`
  background-color: white;
  width: 90px;
  height: 43px;
  border-radius: 0 0 45px 45px;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 400;
`;

const CentreBlack = styled.div`
  width: 40px;
  height: 40px;
  background: black;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
`;

const CentreWhite = styled.div`
  width: 30px;
  height: 30px;
  background: white;
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
`;

const Catch = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  background: rgba(0, 0, 0, 0);
  border-radius: 50%;
  z-index: 3;
  animation: ${catchPokemon} 0.2s 1 steps(1, start);
  animation-delay: 5.2s;
  animation-fill-mode: forwards;
`;

const CatchAnimation = () => {
  return (
    <Container>
      <Pokeball>
        <Top></Top>
        <CentreBlack></CentreBlack>
        <CentreWhite></CentreWhite>
        <Buttom></Buttom>
        <Catch></Catch>
      </Pokeball>
    </Container>
  );
};

export default CatchAnimation;
