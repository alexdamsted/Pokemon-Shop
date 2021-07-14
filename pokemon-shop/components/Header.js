import { HomeIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header>
      <div>
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Home" Icon={ShoppingCartIcon} />
      </div>
    </header>
  );
}

export default Header;
