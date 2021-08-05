import { XIcon } from "@heroicons/react/solid";
import CloseButton from "./CloseButton";

const Bag = ({ isCartClicked, handleCartClick }) => {
  return (
    <div
      className={
        isCartClicked
          ? "bg-gray-500 h-full w-1/5 fixed top-0 right-0 z-50 pt-96 overflow-x-hidden duration-300"
          : "bg-gray-500 h-full w-0 fixed top-0 right-0 z-50 pt-96 overflow-x-hidden duration-300"
      }
    >
      <CloseButton Icon={XIcon} handleCartClick={handleCartClick} />
    </div>
  );
};

export default Bag;
