import React, { useState, useEffect } from "react";
import Image from "next/image";

const Content = ({ pokemon }) => {
  const name = pokemon.name;
  const url = pokemon.url;
  const pokemonIndex = url.split("/")[url.split("/").length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

  return (
    <div>
      <h1 className="text-3xl font-bold">{name}</h1>
      <Image src={imageUrl} width="200" height="200" />
    </div>
  );
};
export default Content;
