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
    <header className="m-auto sm:px-20">
      <div className="m-6 lg:flex lg:justify-between">
        <div className="flex justify-center items-center gap-5">
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
