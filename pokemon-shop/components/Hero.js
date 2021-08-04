import Image from "next/image";

const Hero = ({ pokemon, inputBox }) => {
  const getPokemonByName = (pokemon, name) => {
    const bannerPokemon = pokemon.results.filter((pokemon) =>
      pokemon.name.includes(name)
    );
    // Newer gens have variants (e.g., pikachu-kalos-cap)
    // Original variant always placed at index [0]
    return bannerPokemon[0];
  };

  return (
    <div
      className={`${
        inputBox.inputBox != ""
          ? "hidden"
          : "hidden relative lg:flex pt-40 xl:pt-52 2xl:pt-28"
      }`}
    >
      <Image
        src="/pokemon-shop-banner.jpeg"
        alt="banner image"
        width="3000"
        height="1100"
      />
    </div>
  );
};

export default Hero;
