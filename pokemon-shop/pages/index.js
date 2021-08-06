import Pokemon from "../components/Pokemon";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Bag from "../components/Bag/Bag";

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000/");
  const pokemonData = await res.json();

  return {
    props: { pokemon: pokemonData },
  };
};

export default function Home({
  pokemon,
  inputBox,
  isCartClicked,
  handleCartClick,
  handleChange,
  filterPokemon,
  bagItems,
  removeItemFromBag,
}) {
  return (
    <>
      <Bag
        bagItems={bagItems}
        removeItemFromBag={removeItemFromBag}
        isCartClicked={isCartClicked}
        handleCartClick={handleCartClick}
      />
      <div
        className={
          isCartClicked ? "opacity-20 pointer-events-none" : "opacity-100"
        }
      >
        <Header handleChange={handleChange} handleCartClick={handleCartClick} />

        <Hero pokemon={pokemon} inputBox={inputBox} />
        <Pokemon pokemon={filterPokemon(pokemon)} />
      </div>
    </>
  );
}
