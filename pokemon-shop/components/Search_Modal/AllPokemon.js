const AllPokemon = ({ allPokemon, inputBox }) => {
  console.log("yo");
  return (
    <>
      <div className="text-xl text-black">
        <div>
          <p>Product Suggestions for: {inputBox.inputBox}</p>
        </div>
        {allPokemon.map((allPokemon) => (
          <p>{allPokemon.name}</p>
        ))}
      </div>
    </>
  );
};

export default AllPokemon;
