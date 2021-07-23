import Head from "next/head";
import Image from "next/image";
import requests from "../components/requests";
import Content from "../components/Content";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Content title="All Pokémon" fetchUrl={requests.fetchPokemon} />
    </>
  );
}
