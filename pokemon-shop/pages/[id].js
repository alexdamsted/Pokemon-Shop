import Image from "next/image";
import Header from "../components/Header";

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
    <>
      <Header />
      <div className="pt-32 flex items-center justify-center">
        <div className="flex justify-center w-1/3">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width="500"
            height="500"
            className=""
          />
        </div>

        <div className="w-1/3">
          <p>{"ID: " + pokemon.id}</p>
          <p>{pokemon.name}</p>
          <p>{pokemon.weight + " lbs heavy"}</p>
          <p>{pokemon.height + " feet tall"}</p>
          <p>Type(s): {pokemon.types.map((types) => types.type.name + " ")}</p>
          <p>Moves: {pokemon.moves.map((moves) => moves.move.name + " ")}</p>
          <p>
            Stats:{" "}
            {pokemon.stats.map(
              (moves) => moves.stat.name + moves.base_stat + " "
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
