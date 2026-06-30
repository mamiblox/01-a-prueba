import type { Pokemon } from "../types/pokemon";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "180px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
      }}
    >
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={120}
      />

      <h3>{pokemon.name.toUpperCase()}</h3>

      <p>ID: #{pokemon.id}</p>
    </div>
  );
};

export default PokemonCard;