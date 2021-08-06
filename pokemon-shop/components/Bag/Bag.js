import { XIcon } from "@heroicons/react/solid";
import BagItems from "./BagItems";
import CloseButton from "./CloseButton";

const Bag = ({ isCartClicked, handleCartClick }) => {
  return (
    <div
      className={
        isCartClicked
          ? "bg-white h-full w-1/5 fixed top-0 right-0 z-50 pt-96 overflow-x-hidden duration-300"
          : "bg-white h-full w-0 fixed top-0 right-0 z-50 pt-96 overflow-x-hidden duration-300"
      }
    >
      <CloseButton Icon={XIcon} handleCartClick={handleCartClick} />
      <BagItems />
    </div>
  );
};

export default Bag;
