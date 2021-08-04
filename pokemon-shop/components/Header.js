import {
  HomeIcon,
  ShoppingBagIcon,
  SearchIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import HeaderItem from "./HeaderItem";
import Logo from "./Logo";
import Search from "./Search";

function Header({ handleChange }) {
  return (
    <header className="fixed w-full z-50">
      <div className="py-4 px-8 2xl:flex 2xl:justify-between bg-white border-b border-gray-300">
        <div className="flex justify-center mb-4 2xl:m-0">
          <Logo text="Pokémon Shop" />
        </div>
        <div className="2xl:flex 2xl:justify-end">
          <div className="flex justify-center 2xl:mr-10">
            <Search
              handleChange={handleChange}
              Icon={SearchIcon}
              placeholder="Find a Pokémon..."
            />
          </div>
          <div className="flex justify-center items-center flex-col mt-4 lg:flex-row lg:gap-8 2xl:m-0">
            <HeaderItem title="MY BAG" Icon={ShoppingBagIcon} />
            <HeaderItem title="SAVED ITEMS" Icon={HeartIcon} />
            <HeaderItem title="SIGN IN / REGISTER" Icon={UserCircleIcon} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-20 bg-white w-full py-3 border-b border-gray-300">
        <p className="font-montserrat font-bold text-xs text-gray-500 cursor-pointer transition ease-in-out duration-300 hover:text-blue-600">
          NEW RELEASES
        </p>
        <p className="font-montserrat font-bold text-xs text-gray-500 cursor-pointer transition ease-in-out duration-300 hover:text-blue-600">
          FIRST GENERATION
        </p>
        <p className="font-montserrat font-bold text-xs text-gray-500 cursor-pointer transition ease-in-out duration-300 hover:text-blue-600">
          STRONGEST
        </p>
        <p className="font-montserrat font-bold text-xs text-gray-500 cursor-pointer transition ease-in-out duration-300 hover:text-blue-600">
          FASTEST
        </p>
        <p className="font-montserrat font-bold text-xs text-gray-500 cursor-pointer transition ease-in-out duration-300 hover:text-blue-600">
          LEGENDARY Pokémon
        </p>
        <p className="font-montserrat font-bold text-xs text-gray-500 cursor-pointer transition ease-in-out duration-300 hover:text-blue-600">
          SHINY Pokémon
        </p>
      </div>
    </header>
  );
}

export default Header;
