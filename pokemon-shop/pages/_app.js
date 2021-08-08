import { useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [inputBox, setInputBox] = useState({ inputBox: [] });
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [bagItems, setBagItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalItems, setTotalItems] = useState();

  const handleCartClick = () => {
    setIsCartClicked(!isCartClicked);
  };

  const handleChange = (event) => {
    setInputBox({ inputBox: event.target.value });
  };

  const filterPokemon = (pokemon) => {
    return pokemon.results.filter((pokemon) =>
      pokemon.name
        .toLowerCase()
        .includes(inputBox.inputBox.toString().toLowerCase())
    );
  };

  const addToBag = (pokemon, price, formatTypes) => {
    setBagItems((prevState) => [
      ...prevState,
      {
        pokemonName: pokemon.name,
        pokemonPrice: price(pokemon.weight, pokemon.height),
        pokemonType: formatTypes(pokemon),
        pokemonSprite: pokemon.sprites.front_default,
        pokemonId: totalItems + Math.random(), // Useful for unique key props
      },
    ]);

    handleCartClick();
  };

  const removeItemFromBag = (pokemonId) => {
    setBagItems(bagItems.filter((items) => items.pokemonId != pokemonId));
  };

  const getTotalPrice = () => {
    let total = 0;
    bagItems.forEach((pokemon) => (total += pokemon.pokemonPrice));
    setTotalPrice(total);
  };

  const getTotalItems = () => {
    let total = 0;
    bagItems.forEach(() => (total += 1));
    setTotalItems(total);
  };

  return (
    <Component
      {...pageProps}
      inputBox={inputBox}
      isCartClicked={isCartClicked}
      handleCartClick={handleCartClick}
      handleChange={handleChange}
      filterPokemon={filterPokemon}
      addToBag={addToBag}
      bagItems={bagItems}
      removeItemFromBag={removeItemFromBag}
      getTotalPrice={getTotalPrice}
      getTotalItems={getTotalItems}
      totalPrice={totalPrice}
      totalItems={totalItems}
    />
  );
}

export default MyApp;
