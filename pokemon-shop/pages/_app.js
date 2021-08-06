import { useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [inputBox, setInputBox] = useState({ inputBox: [] });
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [bagItems, setBagItems] = useState([]);

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
    // Concat prevState with newly created state
    setBagItems((prevState) => [
      ...prevState,
      {
        pokemonName: pokemon.name,
        pokemonPrice: price(pokemon.weight, pokemon.height),
        pokemonType: formatTypes(pokemon),
      },
    ]);
  };

  console.log(bagItems);

  return (
    <Component
      {...pageProps}
      inputBox={inputBox}
      isCartClicked={isCartClicked}
      handleCartClick={handleCartClick}
      handleChange={handleChange}
      filterPokemon={filterPokemon}
      addToBag={addToBag}
    />
  );
}

export default MyApp;
