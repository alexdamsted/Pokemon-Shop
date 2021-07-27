import Image from "next/image";

const GenerationBanner = ({
  title,
  bannerImage,
  bannerPokemon,
  textBgColor,
}) => {
  const getSpriteUrl = (url) => {
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const pokemonSpriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    return pokemonSpriteUrl;
  };

  return (
    <div className="relative mt-32 m-4">
      <Image src={bannerImage} alt="banner image" width="700" height="1000" />
      <div className="absolute left-0 top-0 right-0 bottom-0 flex flex-col justify-center items-center">
        <Image src={getSpriteUrl(bannerPokemon.url)} width="250" height="250" />
        <h1
          className={`${textBgColor} p-3 text-black text-center text-lg font-semibold`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default GenerationBanner;
