import { HomeIcon } from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header>
      <div>
        <HeaderItem title="Home" Icon={HomeIcon} />
      </div>
    </header>
  );
}

export default Header;
