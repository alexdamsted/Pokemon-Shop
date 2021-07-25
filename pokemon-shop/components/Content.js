import React, { useState, useEffect } from "react";
import Image from "next/image";

const Content = ({ pokemon }) => {
  let name = pokemon.name;
  name = name[0].toUpperCase() + name.substring(1);
  const url = pokemon.url;
  const pokemonIndex = url.split("/")[url.split("/").length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

  return (
    <div className="p-5">
      <h1 className="text-center text-3xl font-bold">{name}</h1>
      <Image src={imageUrl} width="250" height="250" />
    </div>
  );
};
export default Content;
