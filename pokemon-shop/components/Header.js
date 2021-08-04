import {
  HomeIcon,
  ShoppingBagIcon,
  SearchIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
import Logo from "./Logo";
import Search from "./Search";

function Header({ handleChange }) {
  return (
    <>
      <header className="py-4 px-8 flex justify-between fixed w-full z-50 bg-white border-b border-gray-300">
        <div className="flex">
          <Logo text="Pokémon Shop" />
        </div>
        <div className="2xl:flex 2xl:justify-end">
          <div className="2xl:mr-10">
            <Search
              handleChange={handleChange}
              Icon={SearchIcon}
              placeholder="Pokémon Search..."
            />
          </div>
          <div className="flex justify-center items-center flex-col my-4 sm:flex-row sm:gap-8 sm:m-0">
            <HeaderItem title="MY BAG" Icon={ShoppingBagIcon} />
            <HeaderItem title="SAVED ITEMS" Icon={HeartIcon} />
            <HeaderItem title="SIGN IN / REGISTER" Icon={UserCircleIcon} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
