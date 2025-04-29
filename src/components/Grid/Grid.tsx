import { useEffect, useState } from "react";
import dataJson from "../../data/data.json";
import Item from "../Item/Item";
import Btn from "../Btn/Btn";

const LOCAL_STORAGE_KEY = "extensionsData";

function Grid() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : dataJson;
  });

  const [dataFilter, setDataFilter] = useState(data);
  const [active, setActive] = useState("all");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const filterDataIsActive = () => {
    const activeItems = data.filter((item) => item.isActive);
    setDataFilter(activeItems);
    setActive("active");
  };

  const filterDataInactive = () => {
    const activeItems = data.filter((item) => !item.isActive);
    setDataFilter(activeItems);
    setActive("inactive");
  };

  const resetFilter = () => {
    setData(data);
    setDataFilter(data);
    setActive("all");
  };

  const removeItem = (index: string) => {
    const updatedItems = data.filter((item) => item.name != index);
    setData(updatedItems);
    setDataFilter(updatedItems);
  };

  const changeState = (index: string) => {
    const updatedItems = data.map((item) =>
      item.name === index ? { ...item, isActive: !item.isActive } : item
    );
    setData(updatedItems);
    setDataFilter(updatedItems);
  };

  const restoreList = () => {
    setData(dataJson);
    setDataFilter(dataJson);
    setActive("all");
  };

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
          <Btn 
          name="all"
          click={resetFilter}
          active={active}
          />
          <Btn 
          name="active"
          click={filterDataIsActive}
          active={active}
          />
          <Btn 
          name="inactive"
          click={filterDataInactive}
          active={active}
          />
        </div>
      </section>
      <section className="max-w-[1170px] mx-auto mt-[20px] md:mt-[11px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[15px] ">
          {dataFilter.map((item) => (
            <Item 
            item={item}
            removeItem={removeItem}
            changeState={changeState}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default Grid;
