import { useState } from "react";
import Pokemon from "../components/Pokemon";
import Header from "../components/Header";
import Hero from "../components/Hero";

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000/");
  const pokemonData = await res.json();

  return {
    props: { pokemon: pokemonData },
  };
};

export default function Home({ pokemon }) {
  const [InputBox, setInputBox] = useState({ inputBox: [] });

  const handleChange = (event) => {
    setInputBox({ inputBox: event.target.value });
  };

  const filterPokemon = (pokemon) => {
    return pokemon.results.filter((pokemon) =>
      pokemon.name
        .toLowerCase()
        .includes(InputBox.inputBox.toString().toLowerCase())
    );
  };

  return (
    <>
      <Header handleChange={handleChange} />
      <Hero pokemon={pokemon} inputBox={InputBox} />
      <Pokemon pokemon={filterPokemon(pokemon)} />
    </>
  );
}
