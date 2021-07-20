import {
  HomeIcon,
  ShoppingCartIcon,
  SearchIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
import Logo from "./Logo";
import Search from "./Search";

function Header() {
  return (
    <header className="m-auto py-5 sm:px-20 sm:py-10">
      <div className="lg:flex lg:justify-evenly">
        <div className="flex justify-center items-center flex-col sm:flex-row sm:gap-5">
          <HeaderItem title="Home" Icon={HomeIcon} />
          <HeaderItem title="Cart" Icon={ShoppingCartIcon} />
          <HeaderItem title="Loved" Icon={HeartIcon} />
        </div>
        <div className="text-center sm:flex sm:justify-center sm:items-center">
          <Logo text="Pokémon Store" />
        </div>
      </div>
      <div className="flex justify-center m-auto max-w-md">
        <Search Icon={SearchIcon} placeholder="Pokémon Search..." />
      </div>
    </header>
  );
}

export default Header;
