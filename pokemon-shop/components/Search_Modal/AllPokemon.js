import Image from "next/image";
import Link from "next/link";
const AllPokemon = ({ allPokemon, inputBox }) => {
  const getSpriteUrl = (url) => {
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const pokemonSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    return pokemonSpriteUrl;
  };
  return (
    <>
      <div className="mb-5 text-xl text-black">
        <p>Product Suggestions for: {inputBox.inputBox}</p>
      </div>
      <div className="flex flex-wrap">
        {allPokemon.map((allPokemon) => (
          <div>
            <p className="text-xl text-black">{allPokemon.name}</p>

            <Image
              src={getSpriteUrl(allPokemon.url)}
              alt="pokemon"
              width="150"
              height="150"
              className="transition duration-200 transform hover:scale-125 hover:cursor-pointer"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default AllPokemon;
