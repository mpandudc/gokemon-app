export const TypeColors = {
  bug: '#729f3f',
  dragon: '#53a4cf',
  fairy: '#fdb9e9',
  fire: '#fd7d24',
  ghost: '#7b62a3',
  ground: '#f7de3f',
  normal: '#a4acaf',
  psychic: '#f366b9',
  steel: '##818f91',
  dark: '#707070',
  electric: '#eed535',
  fighting: '#d56723',
  flying: '#3dc7ef',
  grass: '#9bcc50',
  ice: '#51c4e7',
  poison: '#b97fc9',
  rock: '#a38c21',
  water: '#4592c4',
};

export const StatsColors = {
  hp: '#44c81d',
  attack: '#d10d0c',
  defense: '#233d6d',
  'special-attack': '#de9020',
  'special-defense': '#b26d66',
  speed: '#e8db36',
};

export function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
