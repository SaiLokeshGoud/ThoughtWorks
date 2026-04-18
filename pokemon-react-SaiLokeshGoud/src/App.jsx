import React from 'react';
import './App.css'
import PokemonHeader from './PokemonHeader'; 
import PokemonFetcher from './PokemonFetcher';
import PokemonList from './DisplayAllPokemons';

function App() {
  return (
    <div>
      <PokemonHeader/>
      <PokemonFetcher>
        {({ pokemonList, isLoading, error }) => (
          <PokemonList pokemonList={pokemonList} isLoading={isLoading} error={error} />
        )}
      </PokemonFetcher>
    </div>
  );
}

export default App;