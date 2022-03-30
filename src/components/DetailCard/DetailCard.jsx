//libraries
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

//style
import { useSpring, animated } from 'react-spring';
import styled from '@emotion/styled';
import {
  TopContent,
  BottomContent,
  CardImg,
  CardWrapper,
  CloseButton,
  LargeText,
  IdStyle,
  ModalBackground,
  ModalContent,
  ModalWrapper,
  Background,
  ContainerAnimation,
  CenterContainer,
  PokemonID,
  PokeImg,
  OtherContent,
  StatsContent,
  Button,
  MovesContent,
  AbilityContent,
  WeightHeightContent,
  ModalStar,
} from './StyledCard';

//services
import { GET_DETAIL_POKEMON } from '../../graphql/get-pokemon';
import { useQuery } from '@apollo/client';
import { TypeColors } from '../../helpers/Helper';

//components
import { PacmanLoader } from 'react-spinners';
import AbilityPokemon from './Attribute/AbilityPokemon';
import CatchAnimation from '../CatchAnimation';
import TypePokemon from './Attribute/TypePokemon';
import StatsPokemon from './Attribute/StatsPokemon';
import { Pokeball } from './ButtonPokeball';
import MovesPokemon from './Attribute/MovesPokemon';
import WeightHeight from './Attribute/WeightHeight';
import { AiFillStar } from 'react-icons/ai';
import { Error404 } from '../Error404';
import FailedCatchModal from '../FailedCatchModal';

Math.random();
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const DetailCard = () => {
  let { name } = useParams();
  let navigate = useNavigate();
  const [myPokemon, setMyPokemon] = useState([]);
  const [showCatch, setShowCatch] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);

  const { loading, data: { pokemon = [] } = {} } = useQuery(GET_DETAIL_POKEMON, {
    variables: { name: name },
  });

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showSuccess ? 1 : 0,
    transform: showSuccess ? `translateY(0%)` : `translateY(100%)`,
  });

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showSuccess) {
        setShowSuccess(false);
        setShowCatch(false);
      }
    },
    [setShowSuccess, showSuccess]
  );

  const { handleSubmit, register } = useForm();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('myPokemon'));
    if (items) {
      setMyPokemon(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myPokemon', JSON.stringify(myPokemon));
  }, [myPokemon]);

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  if (loading)
    return (
      <ContainerAnimation>
        <PacmanLoader size={40} color={'#e21c25'} />
      </ContainerAnimation>
    );

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowSuccess(false);
      setShowCatch(false);
      setShowFailed(false);
    }
  };

  const tryCatchPokemon = () => {
    setShowCatch(true);

    setTimeout(() => {
      if (randomInteger(0, 100) > 50) {
        setShowSuccess(true);
      } else {
        setShowFailed(true);
      }
    }, 5500);
  };

  const onSubmit = (values) => {
    const tempData = JSON.parse(JSON.stringify(pokemon));
    const finalResult = Object.assign(tempData, values);
    var check = 0;
    if (myPokemon.length !== 0) {
      for (var i = 0; i < myPokemon.length; i++) {
        if (myPokemon[i].nickname === finalResult.nickname && myPokemon[i].id === finalResult.id) {
          check++;
          break;
        }
      }
    }
    if (check === 0) {
      setMyPokemon((myPokemon) => {
        myPokemon = [...myPokemon, finalResult];
        myPokemon.sort(function (a, b) {
          return a.id - b.id;
        });
        return myPokemon;
      });
      navigate(`/gokemon-app`);
      return;
    } else {
      alert('Nickname already exsist');
    }
  };

  const StarComponent = styled(AiFillStar)`
    display: inline-block;
    font-size: 25px;
    margin-top: ${(props) => props.top}px;
    color: #f78800;
  `;

  return (
    <>
      {pokemon.name !== null ? (
        <Background>
          <CardWrapper>
            <CardImg />
            <PokeImg color={TypeColors[pokemon.types[0].type.name]}>
              <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png'} alt="pokemon" />
            </PokeImg>
            <IdStyle>
              <PokemonID pokemon={pokemon} />
            </IdStyle>
            <TopContent>
              <LargeText>{pokemon.name}</LargeText>
              <CenterContainer>
                {pokemon.types.map((x) => (
                  <TypePokemon key={x.type.name} type={x.type.name} />
                ))}
              </CenterContainer>
            </TopContent>
            <BottomContent>
              <OtherContent>
                <WeightHeightContent>
                  <WeightHeight key={pokemon.name} pokemon={pokemon} />
                </WeightHeightContent>
                <AbilityContent>
                  <p>Abilities</p>
                  {pokemon.abilities.map((x) => (
                    <AbilityPokemon key={x.ability.name} ability={x.ability.name} />
                  ))}
                </AbilityContent>
                <MovesContent>
                  <p>Moves</p>
                  <MovesPokemon move={pokemon.moves[0].move.name} />
                  <MovesPokemon move={pokemon.moves[1].move.name} />
                  <MovesPokemon move={pokemon.moves[2].move.name} />
                </MovesContent>
              </OtherContent>
              <StatsContent>
                {pokemon.stats.map((x) => (
                  <StatsPokemon key={x.stat.name} stat={x.stat.name} base_stat={x.base_stat} />
                ))}
              </StatsContent>
            </BottomContent>
            <Button>
              <div className="pokeball" onClick={() => tryCatchPokemon()}>
                <Pokeball />
              </div>
              <p>GO! CATCH</p>
            </Button>
            <Link to={'/gokemon-app'}>
              <CloseButton aria-label="Close modal" hovercolor="#fff" />
            </Link>
          </CardWrapper>
          {showCatch ? <CatchAnimation /> : null}
        </Background>
      ) : (
        <Error404 />
      )}
      {showSuccess ? (
        <ModalBackground onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalContent>
                <ModalStar>
                  <StarComponent top={10} />
                  <StarComponent />
                  <StarComponent top={10} />
                </ModalStar>
                <h1>Gotcha!</h1>
                <p>How do you want to call your Pokémon?</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register('nickname', {
                      required: 'Required',
                    })}
                    placeholder="Nickname"
                  />
                  <button type="submit">Submit</button>
                </form>
              </ModalContent>
              <CloseButton
                aria-label="Close modal"
                hovercolor="#ee1b24"
                onClick={() => {
                  setShowSuccess((prev) => !prev);
                  setShowCatch((prev) => !prev);
                }}
              />
            </ModalWrapper>
          </animated.div>
        </ModalBackground>
      ) : null}
      {showFailed ? <FailedCatchModal setShowFailed={setShowFailed} setShowCatch={setShowCatch} closeModal={closeModal} modalRef={modalRef} /> : null}
    </>
  );
};
