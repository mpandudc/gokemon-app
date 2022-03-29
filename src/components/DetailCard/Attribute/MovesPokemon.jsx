import React from 'react';
import styled from '@emotion/styled';

const Style = styled.div`
  text-transform: capitalize;
  font-size: 12px;
  text-align: center;
`;

const MovesPokemon = (props) => {
  return <Style>{props.move}</Style>;
};

export default MovesPokemon;
