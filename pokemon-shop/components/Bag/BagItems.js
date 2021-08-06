const BagItems = ({ bagItems }) => {
  return (
    <div>
      {bagItems.map((bagItems) => (
        <>
          <p key={bagItems.pokemonName}>{bagItems.pokemonName}</p>
          <p key={bagItems.pokemonPrice}>{bagItems.pokemonPrice}</p>
          <p key={bagItems.pokemonType}>{bagItems.pokemonType}</p>
        </>
      ))}
    </div>
  );
};

export default BagItems;
