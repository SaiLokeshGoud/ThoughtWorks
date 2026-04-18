import React, { useState, useEffect } from 'react';

import DisplayAllPokemons from './DisplayAllPokemons';

function App() {
  const [displayAllPokemons, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      setIsLoading(true); 
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.ok}`);
        }
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <DisplayAllPokemons displayAllPokemons={displayAllPokemons} />
      )}
    </div>
  );
}

export default App;