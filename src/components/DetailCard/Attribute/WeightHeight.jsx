import React from 'react';
import styled from '@emotion/styled';

const ColumnStyle = styled.div`
  width: 60px;
  display: inline-block;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  p {
    font-size: 12px;
    font-weight: 400;
  }
`;
const Border = styled.div`
  height: 38px;
  width: 2px;
  border-left: 3px solid rgba(0, 0, 0, 0.08);
  display: inline-block;
`;

const WeightHeight = (props) => {
  return (
    <>
      <ColumnStyle>
        {props.pokemon.weight}kg<p>Weight</p>
      </ColumnStyle>
      <Border />
      <ColumnStyle>
        {props.pokemon.height}m<p>Height</p>
      </ColumnStyle>
    </>
  );
};

export default WeightHeight;
