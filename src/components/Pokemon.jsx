import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import Pokeball from '../assets/images/pokeball.png';
import { randomInteger } from '../helpers/Helper';
import { PokemonID } from './DetailCard/StyledCard';

export const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 6px 0 0 0;
  line-height: 1.4;
`;

export const LargeText = styled.span`
  font-size: 21px;
  color: #000;
  font-weight: 900;
  text-transform: capitalize;
`;

export const MediumText = styled.span`
  font-size: 14px;
  color: #a6a6a6;
  font-weight: 700;
  text-transform: capitalize;
  width: 50px;
`;

export const OwnedBorder = styled.span`
  font-size: 12px;
  color: #fff;
  font-weight: 600;
  text-transform: capitalize;
  border-radius: 12px;
  width: 72px;
  height: 18px;
  text-align: center;
  position: absolute;
  margin-top: 35px;
  margin-left: 65px;
  background-color: #e21c25;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const CardWrapper = styled.div`
  width: 170px;
  ${tw`
    mb-2
  `}
`;

export const CardContainer = styled.div`
  margin: auto;
  width: 160px;
  height: 205px;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #ffff;
  color: #fff;
  margin-top: 1rem;
  &:hover {
    transform: scale(1.04);
    transition: transform 0.5s ease-in-out;
  }
  background-image: url(${Pokeball});
  background-repeat: no-repeat;
  background-size: 120px;
  background-position: -31px 115px;
`;

export const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

export const Circle = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  top: -4.2em;
  right: -10em;
  z-index: 0;
  background-color: #f7adb4;
  border-radius: 50%;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

export const BottomContainer = styled.div`
  padding: 0 12px;
  width: 100%;
  height: 100px;
  ${tw`
  text-left
  `}
`;

export const Text = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  z-index: 0;
  font-size: 65px;
  font-weight: 900;
`;

export const PokeWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Poke = styled.div`
  width: auto;
  height: 140px;
  z-index: 1;
  user-select: none;
  margin-right: 1em;
  margin-top: 4em;

  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;
Math.random();

function countOwned(myPokemon, id) {
  return myPokemon.filter((x) => x.id === id).length;
}
export function Pokemon(props) {
  return (
    <CardWrapper>
      <Link to={'/gokemon-app/detail/' + props.pokemon.name}>
        <CardContainer>
          <TopContainer>
            <CircleWrapper>
              <Circle size={randomInteger(220, 320)} />
            </CircleWrapper>
            <PokeWrapper>
              <Poke>
                <img src={props.pokemon.artwork} alt={props.pokemon.name} />
              </Poke>
            </PokeWrapper>
            <Text>
              <PokemonID pokemon={props.pokemon} />
            </Text>
          </TopContainer>
          <BottomContainer>
            <DetailsContainer>
              <LargeText>{props.pokemon.name}</LargeText>
              <MediumText>
                <PokemonID pokemon={props.pokemon} />
              </MediumText>
              <OwnedBorder>Owned : {countOwned(props.myPokemon, props.pokemon.id)}</OwnedBorder>
            </DetailsContainer>
          </BottomContainer>
        </CardContainer>
      </Link>
    </CardWrapper>
  );
}
