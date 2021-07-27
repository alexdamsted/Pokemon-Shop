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
        title={"BROWSE GENERATION 1"}
        bannerImage="/../public/city-center.jpeg"
        bannerPokemon={getPokemonByName(pokemon, "charizard")} // Be precise here!
        textBgColor="bg-white"
      />
      <GenerationBanner
        title={"BROWSE GENERATION 2"}
        bannerImage="/../public/futuristic-alley.jpeg"
        bannerPokemon={getPokemonByName(pokemon, "meganium")} // Be precise here!
        textBgColor="bg-white"
      />
      <GenerationBanner
        title={"BROWSE GENERATION 3"}
        bannerImage="/../public/old-alley-cloudy.jpeg"
        bannerPokemon={getPokemonByName(pokemon, "swampert")} // Be precise here!
        textBgColor="bg-white"
      />
    </div>
  );
};

export default BannerSection;
