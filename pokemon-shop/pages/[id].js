import { useState } from "react";
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
  const [isToggleOn, setIsToggleOn] = useState(false);

  const transformFirstLetterUppercase = (name) => {
    return name[0].toUpperCase() + name.substring(1);
  };

  const price = (weight, height) => {
    const price = height + weight * 50;
    return price.toLocaleString(); // A dope function for adding commas to dynamic numbers
  };

  const formatTypes = (pokemon) => {
    let types = pokemon.types.map(
      (types) => transformFirstLetterUppercase(types.type.name) + ", "
    );
    const lastType = types.pop();
    const lastTypeWithoutComma = lastType.substring(0, lastType.length - 2);
    types.push(lastTypeWithoutComma);
    types.splice(types.length, 0, ".");

    return types;
  };

  return (
    <>
      <Header />
      <div className="gap-10 pt-32 w-2/3 m-auto flex items-start justify-center">
        <div className="w-1/2 flex items-center justify-center">
          {pokemon.sprites.front_default ? (
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width="300"
              height="300"
              quality="100"
            />
          ) : (
            <p>No Image</p>
          )}
        </div>

        <div className="w-2/5">
          {/* <p>{"ID: " + pokemon.id}</p> */}
          <p className="font-semibold text-2xl ">
            {transformFirstLetterUppercase(pokemon.name)}
          </p>
          <p className="font-light mb-5">{formatTypes(pokemon)}</p>
          <p className="font-semibold text-2xl mb-5">
            ${price(pokemon.weight, pokemon.height)}
          </p>
          <button className="w-full bg-green-600 text-white font-light py-2 px-4 inline-flex items-center justify-center transition duration-500 hover:bg-green-500">
            ADD TO BAG
          </button>

          <div className="mt-20">
            <p
              onClick={() => setIsToggleOn((prevIsToggleOn) => !prevIsToggleOn)}
            >
              Moves
            </p>
            <p className={isToggleOn ? "font-light" : "font-light hidden "}>
              {pokemon.moves.map((moves) => moves.move.name + " ")}
            </p>
            <p className="font-light">
              Stats
              {/* {pokemon.stats.map(
              (moves) => moves.stat.name + moves.base_stat + " "
            )} */}
            </p>
            <p className="font-light mt-5">{pokemon.weight + " lbs heavy"}</p>
            <p className="font-light">{pokemon.height + " feet tall"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
