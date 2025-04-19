import React, { useEffect, useState } from "react";
import { Logo } from "../Icons/Icons";
import { IconMoon, IconSun } from "../Icons/Icons";

function Header() {
  const [themeDark, setThemeDark] = useState(false)
  useEffect(() => {
    if (themeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeDark]);

  const changeTheme = () => {
    setThemeDark(!themeDark)
  }
  return (
    <nav>
      <div className="max-w-[1170px] mx-auto flex justify-between items-center bg-white p-[15px] rounded-3xl">
        <Logo />
        <button onClick={changeTheme}>
          { themeDark ?  <IconSun /> : <IconMoon /> }
        </button>
      </div>
    </nav>
  );
}

export default Header;
