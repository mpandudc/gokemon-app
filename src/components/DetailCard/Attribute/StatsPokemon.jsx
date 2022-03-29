import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { StatsColors } from '../../../helpers/Helper';

const StatsPokemon = (props) => {
  const Animation = keyframes`
0% { background-color: ${StatsColors[props.stat]}; }
50% { background-color: ${StatsColors[props.stat]}; }
100% { background-color: ${StatsColors[props.stat]}; }
`;

  const RotateAnimation = keyframes`
from { transform: rotate(0deg); }
from { transform: rotate(360deg); }
`;

  const Container = styled.div`
    max-width: 200px;
    text-transform: capitalize;
    font-size: 12px;
  `;
  const StatsContainer = styled.div`
    position: relative;
    width: 100%;
    height: 20px;
    border: 1px solid #fff;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  `;
  const StatsMax = styled.div`
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0px;
    height: 100%;
    background-color: ${StatsColors[props.stat]};
    border-radius: 10px;
    animation: ${Animation} 2500ms infinite ease-in-out;
    z-index: 2;
  `;
  const StatsLiquid = styled.div`
    z-index: 1;
    width: 70px;
    height: 70px;
    animation: ${Animation} 2500ms infinite ease-in-out, ${RotateAnimation} 3000ms infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);
    position: absolute;
    right: -5px;
    top: -10px;
    background-color: ${StatsColors[props.stat]};
    border-radius: 40%;
  `;

  const Stats = styled.span`
    z-index: 2;
    width: 25px;
  `;
  const Max = (props.base_stat / 120) * 100;
  return (
    <Container>
      {props.stat}
      <StatsContainer>
        <StatsMax style={{ width: `${Max}%` }}>
          <StatsLiquid></StatsLiquid>
        </StatsMax>
        <Stats>{props.base_stat}</Stats>
      </StatsContainer>
    </Container>
  );
};

export default StatsPokemon;
