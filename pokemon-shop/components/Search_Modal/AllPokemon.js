import Image from "next/image";
import Link from "next/link";
const AllPokemon = ({ allPokemon, inputBox, clearInputBox }) => {
  const getSpriteUrl = (url) => {
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const pokemonSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    return pokemonSpriteUrl;
  };

  const transformFirstLetterUppercase = (name) => {
    return name[0].toUpperCase() + name.substring(1);
  };

  return (
    <>
      <div className="flex justify-center items-center mb-5">
        <p className="font-opensans font-normal text-base text-black">
          Product Suggestions for: {inputBox.inputBox}
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {allPokemon.map((allPokemon) => (
          <div
            key={allPokemon.name}
            className="p-5 flex flex-col justify-center items-center"
          >
            <p className="font-opensans font-light text-sm text-black">
              {transformFirstLetterUppercase(allPokemon.name)}
            </p>
            <Link href={allPokemon.name} passHref>
              <a onClick={() => clearInputBox()}>
                <Image
                  src={getSpriteUrl(allPokemon.url)}
                  alt="pokemon"
                  width="150"
                  height="150"
                  className="transition duration-200 transform hover:scale-125 hover:cursor-pointer"
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllPokemon;
