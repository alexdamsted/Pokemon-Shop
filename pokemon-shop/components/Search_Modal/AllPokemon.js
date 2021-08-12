const AllPokemon = ({ allPokemon }) => {
  console.log("yo");
  return (
    <>
      <div className="text-xl text-black">
        {allPokemon.map((allPokemon) => (
          <p>{allPokemon.name}</p>
        ))}
      </div>
    </>
  );
};

export default AllPokemon;
