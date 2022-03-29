import React from 'react';
import styled from '@emotion/styled';

const Style = styled.div`
  text-transform: capitalize;
  font-size: 12px;
  text-align: center;
`;

const AbilityPokemon = (props) => {
  return <Style>{props.ability}</Style>;
};

export default AbilityPokemon;
