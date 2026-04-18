import React from 'react';
import PokemonCard from './PokemonCard';

function DisplayAllPokemons({ displayAllPokemons, isLoading, error }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading Pokémon...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : displayAllPokemons.length === 0 ? (
        <p>No Pokémon data available.</p>
      ) : (
        <div id = 'AllPokemons'>
          {displayAllPokemons.map((pokemon) => (
            <div key={pokemon.name}>
              <PokemonCard pokemon={pokemon} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DisplayAllPokemons;