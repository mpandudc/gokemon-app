import styled from '@emotion/styled';
import { MdClose } from 'react-icons/md';
import Pokeball from '../../assets/images/pokeball.png';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

export const CardWrapper = styled.div`
  width: 95%;
  height: 100%;
  padding-bottom: 60px;
  max-width: 500px;
  margin-top: 20px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.3);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-row: 1fr 1fr;
  position: relative;
  border-radius: 30px;
`;

export const CardImg = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 24px 24px 0 0;
  background-image: url(${Pokeball});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 110% 50%;
  opacity: 0.3;
  position: absolute;
`;

export const PokeImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 24px 24px 0 0;
  background: ${(props) => props.color};
  img {
    width: 300px;
    margin: auto;
    position: relative;
    top: -10px;
    z-index: 2;
  }
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.3;
  color: #141414;
  position: relative;
  background-color: white;
  z-index: 1;
  margin-top: -3.3em;
  border-radius: 4em;
  height: 110px;
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  margin-top: 1em;
  width: 320px;
`;

export const Button = styled.div`
  margin: auto;
  height: 150px;
  margin-top: 30px;
  p {
    text-align: center;
    font-size: 16px;
    font-weight: 900;
  }
`;

export const LargeText = styled.span`
  width: 100%;
  font-size: 45px;
  color: #000;
  font-weight: 900;
  text-transform: capitalize;
  text-align: center;
  margin-top: 10px;
`;

export const IdStyle = styled.span`
  font-size: 45px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  position: absolute;
  top: 20px;
  left: 20px;
  font-family: 'Agency FB', arial;
`;

export const OtherContent = styled.div`
  font-size: 14px;
  color: #000;
  width: 160px;
  display: block;
  font-weight: 500;
`;

export const WeightHeightContent = styled.div`
  border-bottom: 3px solid rgba(0, 0, 0, 0.08);
  width: 120px;
  margin: auto;
  margin-bottom: 10px;
`;

export const AbilityContent = styled.div`
  p {
    display: flex;
    justify-content: center;
    letter-spacing: 2px;
    border-bottom: 3px solid rgba(0, 0, 0, 0.08);
    width: 120px;
    font-size: 16px;
    margin: 2px auto 10px auto;
    font-weight: 700;
  }
`;

export const MovesContent = styled.div`
  p {
    display: flex;
    justify-content: center;
    letter-spacing: 2px;
    border-bottom: 3px solid rgba(0, 0, 0, 0.08);
    width: 120px;
    font-size: 16px;
    margin: 10px auto 10px auto;
    font-weight: 700;
  }
`;

export const StatsContent = styled.div`
  width: 160px;
  display: inline-block;
  font-weight: 700;
`;

export const CenterContainer = styled.span`
  margin: auto;
  margin-top: 5px;
`;

export const CloseButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  &:hover {
    color: ${(props) => props.hovercolor};
  }
`;

export const ContainerAnimation = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  position: absolute;
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
  z-index: 600;
`;

export const ModalWrapper = styled.div`
  width: 400px;
  height: 250px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  position: relative;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  h1 {
    font-family: 'Pokemon Hollow Normal';
    font-size: 40px;
    margin-top: -10px;
  }
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 6px;
    background-color: #ee1b24;
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    border: 3px solid transparent;
    outline: none;
    cursor: pointer;
    transition: all 290ms ease-in-out;
    -webkit-border-top-right-radius: 12px;
    -webkit-border-bottom-right-radius: 12px;
    -moz-border-radius-topright: 12px;
    -moz-border-radius-bottomright: 12px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    width: 140px;

    &:hover {
      background-color: transparent;
      color: #000;
      border: 3px solid #ee1b24;
    }
  }
  input {
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    padding: 6px;
    padding-left: 20px;
    width: 200px;
    -webkit-border-top-left-radius: 12px;
    -webkit-border-bottom-left-radius: 12px;
    -moz-border-radius-topleft: 12px;
    -moz-border-radius-bottomleft: 12px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
`;

export const ModalStar = styled.div`
  width: 100px;
  position: relative;
  display: flex;
`;

export const PokemonID = ({ pokemon }) => {
  if (pokemon.id < 10) {
    return '#00' + pokemon.id;
  } else if (pokemon.id >= 100) {
    return '#' + pokemon.id;
  } else {
    return '#0' + pokemon.id;
  }
};
