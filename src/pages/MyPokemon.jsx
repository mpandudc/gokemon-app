import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import { PokemonID } from '../components/DetailCard/StyledCard';
import { Header } from '../components/Header';
import { BottomContainer, CardContainer, CardWrapper, Circle, CircleWrapper, DetailsContainer, MediumText, Poke, PokeWrapper, Text, TopContainer } from '../components/Pokemon';
import { randomInteger } from '../helpers/Helper';
import { ListPokemon } from './Pokedex';

const NewList = styled(ListPokemon)`
  margin-top: 12px;
`;
const NewText = styled(Text)``;

const NewWrapper = styled(CardWrapper)`
  height: 230px;
  margin-bottom: 0;
`;

const NewContainer = styled(CardContainer)`
  height: 200px;
  overflow: hidden;
`;

const Nickname = styled.div`
  font-size: 23px;
  color: #000;
  font-weight: 900;
`;

const NewMedText = styled(MediumText)`
  width: 100%;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  h1 {
    width: 80px;
    display: inline-flex;
  }
  p {
    width: 40px;
    display: inline-flex;
  }
`;

const ReleaseButton = styled.button`
  position: relative;
  background-color: #ee1b24;
  color: #fff;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  top: -215px;
  z-index: 1;
  left: 130px;
  p {
    bottom: 5px;
    position: relative;
    height: 45px;
  }
  &:hover {
    background-color: white;
    color: #000;
    border: 3px solid #ee1b24;
  }
`;

export default function MyPokemon() {
  const [myPokemon, setMyPokemon] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('myPokemon'));
    if (items) {
      setMyPokemon(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myPokemon', JSON.stringify(myPokemon));
  }, [myPokemon]);

  const releasePokemon = (myPokemon, nickname, id) => {
    setMyPokemon((myPokemon) => myPokemon.filter((p) => p.nickname !== nickname || p.id !== id));
  };

  Math.random();

  return (
    <>
      <Header />
      <Banner />
      <NewList>
        {myPokemon.map((pokemon, index) => (
          <NewWrapper key={index}>
            <NewContainer>
              <TopContainer>
                <CircleWrapper>
                  <Circle size={randomInteger(220, 320)} />
                </CircleWrapper>
                <PokeWrapper>
                  <Poke>
                    <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png'} alt="pokemon" />
                  </Poke>
                </PokeWrapper>
                <NewText>
                  <PokemonID pokemon={pokemon} />
                </NewText>
              </TopContainer>
              <BottomContainer>
                <DetailsContainer>
                  <Nickname>{pokemon.nickname}</Nickname>
                  <NewMedText>
                    <h1>{pokemon.name}</h1>
                    <p>
                      <PokemonID pokemon={pokemon} />
                    </p>
                  </NewMedText>
                </DetailsContainer>
              </BottomContainer>
            </NewContainer>
            <ReleaseButton onClick={() => releasePokemon(myPokemon, pokemon.nickname, pokemon.id)}>
              <p>&times;</p>
            </ReleaseButton>
          </NewWrapper>
        ))}
      </NewList>
    </>
  );
}
