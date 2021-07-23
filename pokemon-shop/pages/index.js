import Head from "next/head";
import Image from "next/image";
import requests from "../components/requests";
import Content from "../components/Content";
import Header from "../components/Header";

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Home({ pokemon }) {
  return (
    <>
      <Header />
      <Content pokemon={pokemon} />
    </>
  );
}
