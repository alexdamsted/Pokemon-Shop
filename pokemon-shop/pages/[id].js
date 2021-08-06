import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Bag from "../components/Bag/Bag";

export const getStaticPaths = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000/");
  const pokemonData = await res.json();

  const paths = pokemonData.results.map((pokemon) => {
    return { params: { id: pokemon.name.toString() } }; // id is a mandatory object name in getStaticPaths functions
  });

  return {
    paths: paths,
    fallback: false, // This is for a 404 page when accessing a non-existent route
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.id;
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
  const pokemonData = await res.json();

  return {
    props: { pokemon: pokemonData },
  };
};

const PokemonDetails = ({
  pokemon,
  handleChange,
  isCartClicked,
  handleCartClick,
  addToBag,
}) => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const transformFirstLetterUppercase = (name) => {
    return name[0].toUpperCase() + name.substring(1);
  };

  const price = (weight, height) => {
    const price = height + weight * 50;
    return price.toLocaleString(); // A dope function for adding commas to dynamic numbers
  };

  const formatTypes = (pokemon) => {
    let types = pokemon.types.map(
      (types) => transformFirstLetterUppercase(types.type.name) + ", "
    );
    const lastType = types.pop();
    const lastTypeWithoutComma = lastType.substring(0, lastType.length - 2);
    types.push(lastTypeWithoutComma);
    types.splice(types.length, 0, ".");

    return types;
  };

  // Calculate bg-blue width of each Pokemons' stats' progress bar
  const statsWidth = (stat) => {
    let width = stat / 255; // 255 is maximum stat possible of any given stat
    if (width < 0.083) {
      return "w-1/12";
    } else if (width <= 0.166) {
      return "w-2/12";
    } else if (width <= 0.25) {
      return "w-3/12";
    } else if (width <= 0.333) {
      return "w-4/12";
    } else if (width <= 0.416) {
      return "w-5/12";
    } else if (width <= 0.5) {
      return "w-6/12";
    } else if (width <= 0.583) {
      return "w-7/12";
    } else if (width <= 0.666) {
      return "w-8/12";
    } else if (width <= 0.75) {
      return "w-9/12";
    } else if (width <= 0.833) {
      return "w-10/12";
    } else if (width <= 0.916) {
      return "w-11/12";
    } else if (width <= 1) {
      return "w-12/12";
    }
  };

  return (
    <>
      <Header handleChange={handleChange} handleCartClick={handleCartClick} />
      <Bag isCartClicked={isCartClicked} handleCartClick={handleCartClick} />
      <div className="flex flex-col items-center justify-center pt-72 2xl:pt-32 2xl:w-2/3 2xl:m-auto 2xl:flex 2xl:flex-row 2xl:items-start 2xl:justify-center">
        <div className="2xl:w-1/2 2xl:flex 2xl:items-center 2xl:justify-center">
          {pokemon.sprites.front_default ? (
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width="300"
              height="300"
              quality="100"
            />
          ) : (
            <p>No Image</p>
          )}
        </div>

        <div className="w-2/3 2xl:w-2/5">
          {/* <p>{"ID: " + pokemon.id}</p> */}
          <p className="font-semibold text-2xl ">
            {transformFirstLetterUppercase(pokemon.name)}
          </p>
          <p className="font-light mb-5">{formatTypes(pokemon)}</p>
          <p className="font-semibold text-xl mb-5">
            ${price(pokemon.weight, pokemon.height)}
          </p>
          <button
            onClick={() => addToBag(pokemon, price, formatTypes)}
            className="w-full bg-green-600 text-white font-light py-2 px-4 inline-flex items-center justify-center transition duration-500 hover:bg-green-500"
          >
            ADD TO BAG
          </button>

          <div className="mt-10">
            <p
              onClick={() => setIsToggleOn((prevIsToggleOn) => !prevIsToggleOn)}
              className="mb-5 inline-flex items-center justify-center cursor-pointer"
            >
              Moves
              <svg
                className={
                  isToggleOn
                    ? "ml-1 fill-current h-4 w-4 rotate-180"
                    : "ml-1 fill-current h-4 w-4 rotate-0"
                }
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </p>
            <ul className={isToggleOn ? "font-light" : "font-light hidden"}>
              {pokemon.moves.map((moves) => (
                <li key={moves.move.name}>
                  {transformFirstLetterUppercase(moves.move.name)}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-b"></div>

          <p className="font-light mt-5">Weight (lbs) - {pokemon.weight}</p>
          <div className="border-b mt-5"></div>

          <p className="font-light mt-5">Height (ft) - {pokemon.height}</p>
          <div className="border-b mt-5"></div>

          <div className="mt-5 mb-10 font-light">
            {pokemon.stats.map((moves) => (
              <>
                <p key={moves.stat.name}>
                  {transformFirstLetterUppercase(moves.stat.name)}
                </p>
                <div className="w-full bg-gray-100 mb-5">
                  <div
                    className={`${statsWidth(
                      moves.base_stat
                    )} bg-blue-500 text-sm text-white font-light py-1 text-center`}
                  >
                    {moves.base_stat}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetails;
