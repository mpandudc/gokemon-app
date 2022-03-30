import styled from '@emotion/styled';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuList from '../assets/images/menu-1.png';
import MenuMyPokemon from '../assets/images/menu-2.png';
import MenuListActive from '../assets/images/menu-1-active.png';
import MenuMyPokemonActive from '../assets/images/menu-2-active.png';

const NavMenu = styled.div`
  position: fixed;
  bottom: 0;
  background-color: var(--container-color);
  box-shadow: 0 -1px 14px hsla(var(--hue), var(--sat), 15%, 0.15);
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  display: grid;
  align-content: center;
  border-radius: 2rem 2rem 0 0;
  z-index: var(--z-fixed);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const NavImg = styled.div`
  display: flex;
  width: 36px;
  margin: auto;
  transition: transform 0.2s;
  &:hover {
    transform: scale(0.9);
  }
`;

const NavNameActive = styled.div`
  font-size: 12px;
`;
const NavName = styled.div`
  color: #939393;
  font-size: 12px;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

export function Navbar() {
  const location = useLocation();
  return (
    <NavMenu>
      <NavList>
        <NavItem>
          <Link to="/">
            {location.pathname === '/' ? (
              <>
                <NavImg>
                  <img src={MenuListActive} alt="Pokedex" />
                </NavImg>
                <NavNameActive>Pokédex</NavNameActive>
              </>
            ) : (
              <>
                <NavImg>
                  <img src={MenuList} alt="Pokedex" />
                </NavImg>
                <NavName>Pokédex</NavName>
              </>
            )}
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/mypokemon">
            {location.pathname === '/mypokemon' ? (
              <>
                <NavImg>
                  <img src={MenuMyPokemonActive} alt="My Pokemon" />
                </NavImg>
                <NavNameActive>My Pokémon</NavNameActive>
              </>
            ) : (
              <>
                <NavImg>
                  <img src={MenuMyPokemon} alt="My Pokemon" />
                </NavImg>
                <NavName>My Pokémon</NavName>
              </>
            )}
          </Link>
        </NavItem>
      </NavList>
    </NavMenu>
  );
}
