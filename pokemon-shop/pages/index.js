import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import requests from "../components/requests";
import Content from "../components/Content";
import Header from "../components/Header";

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000/");
  const pokemonData = await res.json();

  return {
    props: { pokemon: pokemonData },
  };
};

export default function Home({ pokemon }) {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap">
        {pokemon.results.map((pokemon) => (
          <Content key={pokemon.name} pokemon={pokemon} />
        ))}
      </main>
    </>
  );
}
