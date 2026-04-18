import React from 'react';

function PokemonHeader() {
  return (
    <header>
      <img src='pokemon-logo.png'></img>
      <input type="text" placeholder="Search Pokemon..."/>
    </header>
  );
}

export default PokemonHeader;