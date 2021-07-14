import {
  HomeIcon,
  ShoppingCartIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
import Search from "./Search";

function Header() {
  return (
    <header className="">
      <div className="w-full my-7 sm:w-full sm:flex sm:justify-center">
        <Search Icon={SearchIcon} placeholder="Pokemon Search..." />
      </div>
      <div className="w-full flex justify-center">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Cart" Icon={ShoppingCartIcon} />
      </div>
    </header>
  );
}

export default Header;
