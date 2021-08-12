import Header from "../components/Header";
import Bag from "../components/Bag/Bag";
import Login from "../components/Authentication/Login";

export const getStaticProps = async () => {
  const pokemonSearchRes = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=700/"
  );
  const pokemonSearchData = await pokemonSearchRes.json();

  return {
    props: { allPokemon: pokemonSearchData },
  };
};

const login = ({
  allPokemon,
  clearInputBox,
  inputBox,
  handleChange,
  filterPokemon,
  bagItems,
  removeItemFromBag,
  isCartClicked,
  handleCartClick,
  getTotalPrice,
  getTotalItems,
  totalPrice,
  totalItems,
}) => {
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
      <Header
        clearInputBox={clearInputBox}
        inputBox={inputBox}
        handleChange={handleChange}
        handleCartClick={handleCartClick}
        allPokemon={filterPokemon(allPokemon)}
      />
      <Login />
    </>
  );
};

export default login;
