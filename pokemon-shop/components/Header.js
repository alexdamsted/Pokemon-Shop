import {
  HomeIcon,
  ShoppingBagIcon,
  SearchIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
import Logo from "./Logo";
import Search from "./Search";

function Header({ handleChange }) {
  return (
    <>
      <header className="fixed w-full z-50 bg-white py-1 border-b border-gray-300">
        <div className="lg:flex lg:justify-evenly">
          <div className="text-center sm:flex sm:justify-center sm:items-center">
            <Logo text="Pokémon Shop" />
          </div>
          <div className="flex justify-center">
            <Search
              handleChange={handleChange}
              Icon={SearchIcon}
              placeholder="Pokémon Search..."
            />
          </div>
          <div className="flex justify-center items-center flex-col sm:flex-row sm:gap-10">
            {/* <HeaderItem title="HOME" Icon={HomeIcon} /> */}
            <HeaderItem title="MY BAG" Icon={ShoppingBagIcon} />
            <HeaderItem title="SAVED ITEMS" Icon={HeartIcon} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
