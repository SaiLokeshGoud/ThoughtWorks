import React, {useState, useEffect } from 'react';

function PokemonCard({ pokemon }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(pokemon.url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [pokemon.url]);

  return (
    <div className="pokemon-card">
      {pokemonData && (
        <>
          <div className='pokemon-image'>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemonData.id}.png`} alt={pokemonData.name} />
          </div>
          <h2>{pokemonData.name}</h2>
          <p><strong>ID: </strong>{pokemonData.id}</p>
          <p><strong>Type: </strong>{pokemonData.types.map(type => type.type.name).join(', ')}</p>
          <p><strong>Abilities: </strong>{pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
        </>
      )}
      {!pokemonData && <p>Loading Pokémon details...</p>}
    </div>
  );
}


export default PokemonCard;