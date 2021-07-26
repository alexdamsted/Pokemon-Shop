import React, { useState, useEffect } from "react";
import Image from "next/image";

const Content = ({ pokemon }) => {
  const filteredPokemon = pokemon.filter((pokemon) => pokemon.name.length < 5);

  const transformFirstLetterUppercase = (name) => {
    name = name[0].toUpperCase() + name.substring(1);
    return name;
  };

  const getSpriteUrl = (url) => {
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const pokemonSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    return pokemonSpriteUrl;
  };

  // const [Pokemon, setPokemon] = useState();

  // useEffect(() => {
  //   setPokemon(pokemon); // pokemon.results prop now stateful
  // }, [pokemon]);

  // console.log(Pokemon);

  return (
    <>
      {/* this should be a stateful array of all pokemon??? */}
      {filteredPokemon.map((pokemon) => (
        <div className="p-5" key={pokemon.name}>
          <h1 className="text-center text-3xl font-bold">
            {transformFirstLetterUppercase(pokemon.name)}
          </h1>
          <Image src={getSpriteUrl(pokemon.url)} width="250" height="250" />
        </div>
      ))}
    </>
  );
};

export default Content;
