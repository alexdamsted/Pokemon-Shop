import { useState } from "react";
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
      <main className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap">
        <Content pokemon={filterPokemon(pokemon)} />
      </main>
    </>
  );
}
