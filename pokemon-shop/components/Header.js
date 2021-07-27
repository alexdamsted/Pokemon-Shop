import {
  HomeIcon,
  ShoppingCartIcon,
  SearchIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
import Logo from "./Logo";
import Search from "./Search";

function Header({ handleChange }) {
  return (
    <>
      <header className="bg-white py-5 border-b border-gray-300">
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
            <HeaderItem title="Home" Icon={HomeIcon} />
            <HeaderItem title="Cart" Icon={ShoppingCartIcon} />
            <HeaderItem title="Loved" Icon={HeartIcon} />
          </div>
        </div>

        {/* <div className="bg-gray-200">
          <div className="flex justify-center m-auto max-w-md">
            <Search
              handleChange={handleChange}
              Icon={SearchIcon}
              placeholder="Pokémon Search..."
            />
          </div>
        </div> */}
      </header>
    </>
  );
}

export default Header;
