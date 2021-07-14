import {
  HomeIcon,
  ShoppingCartIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
import Search from "./Search";

function Header() {
  return (
    <header>
      <div className="w-1/2 m-auto sm:w-full sm:flex sm:justify-center">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Cart" Icon={ShoppingCartIcon} />
        <Search Icon={SearchIcon} placeholder="Pokemon Search..." />
      </div>
    </header>
  );
}

export default Header;
