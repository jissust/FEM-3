import dataJson from "../../data/data.json";
import Item from "../Item/Item";
import Btn from "../Btn/Btn";
import { useExtensions } from "../../context/DataContext";

type ExtensionItem = {
  name: string;
  isActive: boolean;
  logo: string;
  description: string;
};

function Grid() {
  const { data, dataFilter, active, restoreList } = useExtensions();

  return (
    <>
      <button
        className={`
              fixed
              bottom-[50px]
              right-[50px]
              shadow-sm py-[7px] px-5 
              bg-[#FFFFFF]
              focus:bg-[#c2251c] 
              focus:text-[#FFFFFF]
              text-[#09153e] 
              dark:bg-[#2f354b]
              dark:focus:bg-[#ed5e58] 
              dark:focus:text-[#000000]
              dark:text-[#f1f5f8]
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
              transition-all 
              duration-700 
              ease-in-out
              transform
              ${
                dataJson.length === data.length
                  ? "opacity-0 scale-90 pointer-events-none"
                  : "opacity-100 scale-100 pointer-events-auto"
              }
              `}
        onClick={restoreList}
      >
        Restore list
      </button>
      <section className="max-w-[1170px] mx-auto py-5 mt-[14px] md:mt-[45px] grid grid-cols-1 md:grid-cols-2">
        <h1 className="text-[#09153e] dark:text-[#f1f5f8] text-2xl text-[32px] font-bold mt-[3px] text-center md:text-start transition-colors duration-1000 ease-in-out">
          Extensions List
        </h1>
        <div className="flex gap-[10px] justify-center md:justify-end mt-[19px] md:mt-0">
          <Btn name="all" active={active} />
          <Btn name="active" active={active} />
          <Btn name="inactive" active={active} />
        </div>
      </section>
      <section className="max-w-[1170px] mx-auto mt-[20px] md:mt-[11px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[15px] ">
          {dataFilter.map((item: ExtensionItem) => (
            <Item item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
export default Grid;
