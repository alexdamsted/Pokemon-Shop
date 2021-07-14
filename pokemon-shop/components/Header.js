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
      <div className="">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Cart" Icon={ShoppingCartIcon} />
        <Search Icon={SearchIcon} placeholder="Pokemon Search..." />
      </div>
    </header>
  );
}

export default Header;
