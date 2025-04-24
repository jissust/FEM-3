import React, { useEffect, useState } from "react";
import { Logo, LogoDark } from "../Icons/Icons";
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
      <div className="max-w-[1170px] mx-auto flex justify-between items-center bg-white dark:bg-[#1f2535] px-[15px] py-[11px] rounded-3xl shadow-sm">
      { themeDark ?  <LogoDark /> : <Logo /> }
        <button onClick={changeTheme} className="bg-gray-200 dark:bg-[#2f354b] p-[14px] rounded-xl hover:cursor-pointer border-2 border-transparent hover:border-2 hover:border-[#eef8fa] dark:hover:border-[#1f2535] hover:outline-2 hover:outline-[#f45c51]">
          { themeDark ?  <IconSun /> : <IconMoon /> }
        </button>
      </div>
    </nav>
  );
}

export default Header;
