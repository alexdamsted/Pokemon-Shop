import Image from "next/image";

export const getStaticPaths = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000/");
  const pokemonData = await res.json();

  const paths = pokemonData.results.map((pokemon) => {
    return { params: { id: pokemon.name.toString() } }; // id is a mandatory object name in getStaticPaths functions
  });

  return {
    paths: paths,
    fallback: false, // This is for a 404 page when accessing a non-existent route
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.id;
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
  const pokemonData = await res.json();

  return {
    props: { pokemon: pokemonData },
  };
};

const PokemonDetails = ({ pokemon }) => {
  return (
    <div>
      <p>Pokemon Details Page</p>
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width="250"
        height="250"
      />
      <p>{"ID: " + pokemon.id}</p>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight + " lbs heavy"}</p>
      <p>{pokemon.height + " feet tall"}</p>
      <p>Type(s): {pokemon.types.map((types) => types.type.name + " ")}</p>
      <p>Moves: {pokemon.moves.map((moves) => moves.move.name + " ")}</p>
      <p>
        Stats:{" "}
        {pokemon.stats.map((moves) => moves.stat.name + moves.base_stat + " ")}
      </p>
    </div>
  );
};

export default PokemonDetails;
