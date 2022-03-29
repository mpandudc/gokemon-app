import styled from '@emotion/styled';
import React from 'react';
import { TypeColors } from '../../../helpers/Helper';

const Style = styled.div`
  width: 80px;
  font-size: 14px;
  text-align: center;
  display: inline-block;
  text-transform: capitalize;
  background-color: ${(props) => props.color};
  padding: 6px;
  margin: 0 8px;
  border-radius: 15px;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 1px;
`;

const TypePokemon = (props) => {
  return <Style color={TypeColors[props.type]}>{props.type}</Style>;
};

export default TypePokemon;
