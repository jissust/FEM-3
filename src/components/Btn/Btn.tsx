import { useExtensions } from "../../context/DataContext";

interface ExtensionBtn {
  name: string;
  active: string;
}
function Btn({ name, active }: ExtensionBtn) {
  const { filterDataInactive, filterDataIsActive, resetFilter } =
    useExtensions();

  const handleClick = () => {
    if (name === "all") resetFilter();
    else if (name === "active") filterDataIsActive();
    else if (name === "inactive") filterDataInactive();
  };

  return (
    <button
      className={`
              shadow-sm py-[7px] px-5 
                  ${
                    active === name
                      ? "bg-[#c2251c] text-white"
                      : "bg-white text-[#09153e]"
                  } 
    ${
      active === name
        ? "dark:bg-[#ed5e58] dark:text-[#000000]"
        : "dark:bg-[#2f354b] dark:text-[#f1f5f8]"
    }
              active:bg-[#c2251c] 
              rounded-3xl 
              hover:outline-2 
              hover:outline-[#c2251c] 
              hover:cursor-pointer 
              text-[19px] 
              border-2 
              border-transparent 
              hover:border-2 
              hover:border-[#eef8fa] 
              dark:border-[2px] 
              dark:border-[#3f455b] 
              dark:hover:border-[#1f2535]
              dark:hover:outline-[#ed5e58] 
              capitalize
              transition-colors 
              duration-1000 
              ease-in-out
              ${active !== name ? "dark:hover:bg-[#525868]" : ""}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
export default Btn;
