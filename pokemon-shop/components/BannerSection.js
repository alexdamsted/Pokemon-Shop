import GenerationBanner from "./GenerationBanner";

const BannerSection = ({ pokemon }) => {
  const getPokemonByName = (pokemon, name) => {
    const bannerPokemon = pokemon.results.filter((pokemon) =>
      pokemon.name.includes(name)
    );
    // Newer gens have variants (e.g., pikachu-kalos-cap)
    // Original variant always placed at index [0]
    return bannerPokemon[0];
  };

  return (
    <div className="flex flex-col justify-center items-center xl:flex-row">
      <GenerationBanner
        title={"GENERATION ONE"}
        bannerPokemon={getPokemonByName(pokemon, "charizard")} // Be precise here!
      />
      <GenerationBanner
        title={"GENERATION TWO"}
        bannerPokemon={getPokemonByName(pokemon, "meganium")} // Be precise here!
      />
      <GenerationBanner
        title={"GENERATION THREE"}
        bannerPokemon={getPokemonByName(pokemon, "swampert")} // Be precise here!
      />
    </div>
  );
};

export default BannerSection;
