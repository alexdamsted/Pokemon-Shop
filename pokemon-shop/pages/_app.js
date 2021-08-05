import { useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [inputBox, setInputBox] = useState({ inputBox: [] });
  const [isCartClicked, setIsCartClicked] = useState(false);

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

  const addToCart = (pokemon) => {};

  return (
    <Component
      {...pageProps}
      inputBox={inputBox}
      isCartClicked={isCartClicked}
      handleCartClick={handleCartClick}
      handleChange={handleChange}
      filterPokemon={filterPokemon}
    />
  );
}

export default MyApp;
