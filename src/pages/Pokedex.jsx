//library
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
//sytle
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { PageButton } from '../components/PageButton';
//component
import { Pokemon } from '../components/Pokemon';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';
import { PacmanLoader } from 'react-spinners';
import { ContainerAnimation } from '../components/DetailCard/StyledCard';
import Pokeball from '../assets/images/pokeball.png';
//service
import { GET_POKEMONS } from '../graphql/get-pokemon';
import { useNavigate } from 'react-router-dom';

export const ListPokemon = styled.div`
  align-content: space-evenly;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  @media (min-width: 1536px) {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  ${tw`
    mx-auto
    grid
    w-11/12
    justify-evenly
    justify-items-center
    items-center
  `}
`;

const HeaderContainer = styled.div`
  max-height: 200px;
  z-index: 500;
  ${tw`
    w-full
    top-0
    shadow-md
  `}
  background-color: #e21c25;
  border-radius: 0px 0px 40px 40px;
`;

const Background = styled.div`
  z-index: 600;
  background-image: url(${Pokeball});
  background-repeat: no-repeat;
  background-size: 220px;
  background-position: 110% 300%;
  opacity: 0.2;
  width: 100%;
  height: 200px;
`;

const LogoContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 60px;
  width: 100%;
  h1 {
    font-size: 35px;
    color: white;
    font-weight: 700;
    width: 100%;
    line-height: 1;
    padding-left: 5%;
    @media (max-width: 640px) {
      font-size: 35px;
    }
    @media (min-width: 1024px) {
      font-size: 40px;
    }
    @media (min-width: 1280px) {
      font-size: 50px;
    }
    @media (min-width: 1536px) {
      font-size: 60px;
    }
  }
`;

const InputStyle = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  top: 145px;
  justify-content: center;
  align-content: center;
  margin: auto;
  input {
    border-radius: 24px;
    width: 90%;
    height: 40px;
    padding-left: 20px;
    padding-bottom: 2px;
  }
  button[type='submit'],
  input[type='submit'] {
    position: absolute;
    right: 5%;
    color: #b8b8b8;
    display: block;
    box-sizing: border-box;
    width: 15%;
    border-radius: 12px;
    padding: 0px 10px;
    font-family: FontAwesome, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    &:hover {
      cursor: pointer;
    }
  }
`;

function SearchName() {
  const methods = useFormContext();
  return <input {...methods.register('target')} placeholder="Search Pokémon by name ..." required />;
}

export default function Pokedex() {
  let navigate = useNavigate();
  const [myPokemon, setMyPokemon] = useState([]);
  const [page, setPage] = useState(0);

  const methods = useForm();
  const { handleSubmit } = methods;

  //get list my pokemon from local storage when first time render
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('myPokemon'));
    if (items) {
      setMyPokemon(items);
    }
  }, []);
  //get list pokemon from graphql
  const { loading, data: { pokemons: { results } = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { limit: 10, offset: page * 10 },
  });

  if (loading)
    return (
      <ContainerAnimation>
        <PacmanLoader size={40} color={'#e21c25'} />
      </ContainerAnimation>
    );

  const HandleSearch = (value) => {
    navigate(`/gokemon-app/detail/${value.target.toLowerCase()}`);
  };

  return (
    <>
      <HeaderContainer>
        <Background></Background>
        <LogoContainer>
          <h1>What Pokémon are you looking for?</h1>
        </LogoContainer>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit((data) => HandleSearch(data))}>
            <InputStyle>
              <SearchName />
              <input type="submit" value="&#xf002;" />
            </InputStyle>
          </form>
        </FormProvider>
      </HeaderContainer>

      <ListPokemon>{results && results.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} myPokemon={myPokemon} />)}</ListPokemon>
      <PageButton>
        <button disabled={!page} onClick={() => setPage((prev) => prev - 1)}>
          <IoIosArrowDropleftCircle />
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>
          <IoIosArrowDroprightCircle />
        </button>
      </PageButton>
    </>
  );
}
