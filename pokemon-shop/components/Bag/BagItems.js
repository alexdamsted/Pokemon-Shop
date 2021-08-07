import Image from "next/image";

const BagItems = ({ Icon, bagItems, removeItemFromBag }) => {
  return (
    <div>
      {bagItems.map((bagItems) => (
        <>
          {bagItems.pokemonSprite ? (
            <Image
              src={bagItems.pokemonSprite}
              alt={bagItems.pokemonName}
              width="150"
              height="150"
              quality="100"
            />
          ) : (
            <p>No Image</p>
          )}
          <p key={bagItems.pokemonName}>{bagItems.pokemonName}</p>
          <p key={bagItems.pokemonPrice}>{bagItems.pokemonPrice}</p>
          <p key={bagItems.pokemonType}>{bagItems.pokemonType}</p>
          <Icon
            onClick={() => removeItemFromBag(bagItems.pokemonName)}
            className="h-8 cursor-pointer"
          />
        </>
      ))}
    </div>
  );
};

export default BagItems;
