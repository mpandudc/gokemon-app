import styled from '@emotion/styled';
import React from 'react';
import tw from 'twin.macro';
import GokemonLogo from '../assets/images/logo.png';
import { RiSearch2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  min-height: 48px;
  z-index: 500;
  ${tw`
    w-full
    lg: pl-12
    lg: pr-12
    sticky
    top-0
    bg-white
    overflow-hidden
    shadow-md
  `}
  padding: 1em 0 1.5em 0;
`;

const LogoContainer = styled.div`
  img {
    width: 180px;
    margin-left: 1em;
  }
`;

const SearchButton = styled.div`
  position: absolute;
  font-size: 25px;
  right: 30px;
  top: 25px;
`;

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={GokemonLogo} alt="gokemon" />
        <Link to="/">
          <SearchButton>
            <RiSearch2Line />
          </SearchButton>
        </Link>
      </LogoContainer>
    </HeaderContainer>
  );
}
