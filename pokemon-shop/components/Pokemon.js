import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Pokemon = ({ pokemon }) => {
  const [TotalPokemon, setTotalPokemon] = useState();
  useEffect(() => {
    getTotalPokemon();
  }, [pokemon]);

  const getTotalPokemon = () => {
    let total = 0;
    pokemon.results.forEach(() => (total += 1));
    setTotalPokemon(total);
  };

  const getSpriteUrl = (url) => {
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const pokemonSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    return pokemonSpriteUrl;
  };

  const transformFirstLetterUppercase = (name) => {
    return name[0].toUpperCase() + name.substring(1);
  };

  return (
    <main className="px-10 bg-white text-gray-600 pt-96 lg:pt-32 flex flex-col items-center justify-center sm:flex-row sm:flex-wrap">
      <section className="mb-5 flex flex-col items-center justify-center w-full border-b">
        <h1 className="pt-5 text-2xl font-opensans font-semibold">
          All Pokémon
        </h1>
        <p className="mb-5 py-5 text-center font-opensans font-light text-xs">
          Here you will find approximately all Pokémon found in the first 5
          Generations. There is a <u>search bar</u> up-top in the header of this
          website, feel free to use it.
        </p>
      </section>
      <section className="flex flex-col w-full">
        <p className="py-5 text-center font-opensans font-light text-xs">
          {TotalPokemon} results
        </p>
      </section>
      {pokemon.results.map((pokemon) => (
        <div className="m-5 p-5 border bg-gray-50" key={pokemon.name}>
          <Link href={pokemon.name}>
            <h1 className="text-center text-small font-opensans font-light hover:cursor-pointer">
              {transformFirstLetterUppercase(pokemon.name)}
            </h1>
          </Link>

          <Link href={pokemon.name} passHref>
            <a>
              <Image
                src={getSpriteUrl(pokemon.url)}
                alt="pokemon"
                width="250"
                height="250"
                className="transition duration-200 transform hover:scale-125 hover:cursor-pointer"
              />
            </a>
          </Link>
        </div>
      ))}
    </main>
  );
};

export default Pokemon;
