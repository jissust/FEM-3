import { useExtensions } from "../../context/DataContext";

type ExtensionItem = {
  name: string;
  isActive: boolean;
  logo: string;
  description: string;
};
interface ItemProps {
  item: ExtensionItem;
}

function Item({ item }: ItemProps) {
  const { removeItem, changeState } = useExtensions();

  return (
    <div
      key={item.name}
      className="bg-white dark:bg-[#1f2535] p-[18px] shadow-sm rounded-2xl flex flex-col justify-between h-full min-h-[199px] dark:border-[2px] dark:border-[#3f455b] transition-colors duration-1000 ease-in-out"
    >
      <div className="flex">
        <div className="w-full max-w-[60px]">
          <img src={item.logo} alt={item.name} />
        </div>
        <div className="px-4">
          <div className="text-[#09153e] dark:text-[#f1f5f8] text-lg font-bold text-[19px]">
            {item.name}
          </div>
          <div className="text-[15px] leading-[22px] dark:text-[#7e828e]">
            {item.description}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between items-center mt-auto">
        <button
          className=" py-[6px] md:py-2 px-[16px] md:px-[17px] focus:bg-[#c2251c] dark:focus:bg-[#ed5e58] focus:text-[#FFFFFF] dark:focus:text-[#3f455b] rounded-3xl hover:cursor-pointer text-[#09153e] dark:text-[#f8fcff] text-[14px] border-1 border-[#c9cacc] dark:border-1 dark:border-[#3f455b] hover:outline-2 hover:outline-[#c2251c] dark:hover:outline-[#ed5e58]  hover:border-1 hover:border-[#FFFFFF] dark:hover:border-[#1f2535] dark:hover:bg-[#525868]"
          onClick={() => {
            removeItem(item.name);
          }}
        >
          Remove
        </button>
        <div className="mt-[2px] hover:border-2 hover:border-white hover:outline-2 hover:outline-[#c2251c] dark:hover:outline-[#ed5e58] dark:hover:border-[#1f2535] rounded-full">
          <div
            className={`w-[35px] h-[20px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              item.isActive ? "bg-[#c2251c] dark:bg-[#ed5e58]" : "bg-gray-400"
            }`}
            onClick={() => changeState(item.name)}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                item.isActive ? "translate-x-[12px]" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
