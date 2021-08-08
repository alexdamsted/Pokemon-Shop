import Image from "next/image";

const BagItems = ({ Icon, bagItems, removeItemFromBag }) => {
  return (
    <>
      {bagItems.map((bagItems) => (
        <div
          key={bagItems.pokemonSprite + bagItems.pokemonId}
          className="flex py-3 border-b w-100"
        >
          <div className="flex items-center justify-center w-1/2">
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
          </div>
          <div className="flex w-1/3 flex-col items-start justify-center">
            <p
              className="text-black font-bold text-sm"
              key={bagItems.pokemonName + bagItems.pokemonId}
            >
              {bagItems.pokemonName.toUpperCase()}
            </p>
            <p
              className="text-gray-600 font-bold text-sm"
              key={bagItems.pokemonPrice + bagItems.pokemonId}
            >
              ${bagItems.pokemonPrice}
            </p>
            <p
              className="my-3 text-black font-light text-sm"
              key={bagItems.pokemonType + bagItems.pokemonId}
            >
              Type: {bagItems.pokemonType}
            </p>
          </div>
          <div className="flex w-1/3 items-center justify-center">
            <Icon
              onClick={() => removeItemFromBag(bagItems.pokemonId)}
              className="h-8 cursor-pointer hover:text-red-600"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default BagItems;
