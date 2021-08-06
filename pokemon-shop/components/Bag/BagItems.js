const BagItems = ({ Icon, bagItems, removeItemFromBag }) => {
  return (
    <div>
      {bagItems.map((bagItems) => (
        <>
          <p key={bagItems.pokemonName}>{bagItems.pokemonName}</p>
          <p key={bagItems.pokemonPrice}>{bagItems.pokemonPrice}</p>
          <p key={bagItems.pokemonType}>{bagItems.pokemonType}</p>
          <Icon
            onClick={() => removeItemFromBag(bagItems.pokemonName)}
            className="h-8"
          />
        </>
      ))}
    </div>
  );
};

export default BagItems;
