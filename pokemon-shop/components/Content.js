import React, { useState, useEffect } from "react";
import Image from "next/image";

const Content = ({ pokemon }) => {
  const name = pokemon.name;
  const url = pokemon.url;
  const pokemonIndex = url.split("/")[url.split("/").length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

  return (
    <main className="flex flex-col items-center border border-red-500">
      <h1 className="text-3xl font-bold border border-red-500">{name}</h1>
      <div className="border border-red-500">
        <Image src={imageUrl} width="200" height="200" className="" />
      </div>
    </main>
  );
};
export default Content;
