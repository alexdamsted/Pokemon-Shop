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
      <header className="fixed w-full z-50 bg-white py-4 border-b border-gray-300">
        <div className="2xl:flex 2xl:justify-around">
          <div className="flex justify-center items-center py-5 2xl:p-0">
            <Logo text="Pokémon Shop" />
          </div>
          <div className="flex justify-center">
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
