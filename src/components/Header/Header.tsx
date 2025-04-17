import { Logo } from "../Icons/Icons";
import { IconMoon } from "../Icons/Icons";

function Header() {
  return (
    <nav>
      <div className="max-w-[1170px] mx-auto">
        <Logo />
        <div>
          <IconMoon />
        </div>
      </div>
    </nav>
  );
}

export default Header;
