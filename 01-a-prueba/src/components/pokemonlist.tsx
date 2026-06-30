import { useEffect, useState } from "react";
import PokemonCard from "./pokemoncard";
import type { Pokemon } from "../types/pokemon";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      // Obtiene los primeros 10 Pokémon
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );

      const data = await response.json();

      // Obtiene la información completa de cada Pokémon
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon: { url: string }) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );

      setPokemons(pokemonData);
    };

    fetchPokemons();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;