import { XIcon, TrashIcon } from "@heroicons/react/solid";
import BagItems from "./BagItems";
import BagItemsSummary from "./BagItemsSummary";
import CheckoutButton from "./CheckoutButton";
import CloseButton from "./CloseButton";

const Bag = ({
  isCartClicked,
  handleCartClick,
  bagItems,
  removeItemFromBag,
  getTotalPrice,
  getTotalItems,
  totalPrice,
  totalItems,
}) => {
  return (
    <div
      className={
        isCartClicked
          ? "border-l bg-white h-full w-full opacity-100 fixed top-0 p-3 right-0 z-50 overflow-x-hidden duration-300 xl:w-2/6"
          : "bg-white h-full w-0 fixed top-0 right-0 z-50 overflow-x-hidden duration-300"
      }
    >
      <CloseButton Icon={XIcon} handleCartClick={handleCartClick} />
      <CheckoutButton />
      <BagItemsSummary
        getTotalPrice={getTotalPrice}
        getTotalItems={getTotalItems}
        totalPrice={totalPrice}
        totalItems={totalItems}
      />
      <BagItems
        Icon={TrashIcon}
        bagItems={bagItems}
        removeItemFromBag={removeItemFromBag}
      />
    </div>
  );
};

export default Bag;
