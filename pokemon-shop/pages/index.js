import Pokemon from "../components/Pokemon";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Bag from "../components/Bag/Bag";

export const getStaticProps = async () => {
  const pokemonSearchRes = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=700/"
  );
  const pokemonSearchData = await pokemonSearchRes.json();

  return {
    props: { allPokemon: pokemonSearchData },
  };
};

export default function Home({
  allPokemon,
  inputBox,
  clearInputBox,
  isCartClicked,
  handleCartClick,
  handleChange,
  filterPokemon,
  removeItemFromBag,
  bagItems,
  getTotalPrice,
  getTotalItems,
  totalPrice,
  totalItems,
}) {
  return (
    <>
      <Bag
        bagItems={bagItems}
        removeItemFromBag={removeItemFromBag}
        isCartClicked={isCartClicked}
        handleCartClick={handleCartClick}
        getTotalPrice={getTotalPrice}
        getTotalItems={getTotalItems}
        totalPrice={totalPrice}
        totalItems={totalItems}
      />
      <div
        className={
          isCartClicked ? "opacity-20 pointer-events-none" : "opacity-100"
        }
      >
        <Header
          clearInputBox={clearInputBox}
          inputBox={inputBox}
          handleChange={handleChange}
          handleCartClick={handleCartClick}
          allPokemon={filterPokemon(allPokemon)}
        />

        <Hero pokemon={allPokemon} inputBox={inputBox} />
        <Pokemon pokemon={allPokemon} />
      </div>
    </>
  );
}
