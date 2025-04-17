import { Logo } from "../Icons/Icons";
import { IconMoon } from "../Icons/Icons";

function Header() {
  return (
    <nav>
      <div className="max-w-[1170px] mx-auto flex justify-between items-center bg-white p-[15px] rounded-3xl">
        <Logo />
        <div>
          <IconMoon />
        </div>
      </div>
    </nav>
  );
}

export default Header;
