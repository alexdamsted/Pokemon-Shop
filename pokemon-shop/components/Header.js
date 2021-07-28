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
      <header className="fixed w-full z-50 bg-white py-4 border-b border-gray-300">
        <div className="xl:flex xl:justify-evenly">
          <div className="flex justify-center items-center py-5 xl:p-0">
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
