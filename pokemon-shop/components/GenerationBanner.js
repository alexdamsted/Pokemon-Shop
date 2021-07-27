import Image from "next/image";

const GenerationBanner = ({ title, bannerPokemon }) => {
  const getSpriteUrl = (url) => {
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const pokemonSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    return pokemonSpriteUrl;
  };

  return (
    <div className="items-center justify-center m-10">
      <Image src={getSpriteUrl(bannerPokemon.url)} width="500" height="500" />
      <h1 className="bg-gray-800 border p-5 text-white text-center text-3xl font-semibold">
        {title}
      </h1>
    </div>
  );
};

export default GenerationBanner;
