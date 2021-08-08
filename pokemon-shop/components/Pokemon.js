import Image from "next/image";
import Link from "next/link";

const Pokemon = ({ pokemon }) => {
  const getSpriteUrl = (url) => {
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const pokemonSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    return pokemonSpriteUrl;
  };

  const transformFirstLetterUppercase = (name) => {
    return name[0].toUpperCase() + name.substring(1);
  };

  return (
    <main className="bg-white text-gray-600 pt-96 lg:pt-32 flex flex-col items-center justify-center sm:flex-row sm:flex-wrap">
      {/* this should be a stateful array of all pokemon??? */}
      {pokemon.map((pokemon) => (
        <div className="p-5" key={pokemon.name}>
          <Link href={pokemon.name}>
            <h1 className="text-center text-2xl font-light hover:cursor-pointer">
              {transformFirstLetterUppercase(pokemon.name)}
            </h1>
          </Link>

          <Link href={pokemon.name} passHref>
            <a>
              <Image
                src={getSpriteUrl(pokemon.url)}
                alt="pokemon"
                width="250"
                height="250"
                className="hover:cursor-pointer"
              />
            </a>
          </Link>
        </div>
      ))}
    </main>
  );
};

export default Pokemon;
