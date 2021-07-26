import Image from "next/image";

const Pokemon = ({ pokemon }) => {
  const transformFirstLetterUppercase = (name) => {
    name = name[0].toUpperCase() + name.substring(1);
    return name;
  };

  const getSpriteUrl = (url) => {
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const pokemonSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    return pokemonSpriteUrl;
  };

  return (
    <>
      {/* this should be a stateful array of all pokemon??? */}
      {pokemon.map((pokemon) => (
        <div className="p-5" key={pokemon.name}>
          <h1 className="text-center text-2xl font-light">
            {transformFirstLetterUppercase(pokemon.name)}
          </h1>
          <Image src={getSpriteUrl(pokemon.url)} width="250" height="250" />
        </div>
      ))}
    </>
  );
};

export default Pokemon;
