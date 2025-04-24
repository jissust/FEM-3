import { useEffect, useState } from "react";
import dataJson from "../../data/data.json";

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
    setActive("active")
  };

  const filterDataInactive = () => {
    const activeItems = data.filter((item) => !item.isActive);
    setDataFilter(activeItems);
    setActive("inactive")
  };

  const resetFilter = () => {
    setData(data);
    setDataFilter(data);
    setActive("all")
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

  return (
    <>
      <section className="max-w-[1170px] mx-auto flex justify-between py-5 mt-[45px]">
        <h1 className="text-[#09153e] dark:text-[#f1f5f8] text-2xl text-[32px] font-bold mt-[3px] ">
          Extensions List
        </h1>
        <div className="flex gap-[14px]">
          <button
            className={`shadow-sm py-2 px-5 dark:bg-[#2f354b] focus:bg-[#f45c51] focus:text-[#3f455b] rounded-3xl hover:outline-2 hover:outline-[#f45c51] hover:cursor-pointer text-[#09153e] dark:text-[#f1f5f8] text-[19px] border-2 border-transparent hover:border-2 hover:border-[#eef8fa] dark:border-[2px] dark:border-[#3f455b] dark:hover:border-[#1f2535]
              ${ active === 'all' ? 'bg-[#f45c51] dark:bg-[#f45c51]':'dark:hover:bg-[#525868]'}`}
            onClick={resetFilter}
          >
            All 
          </button>
          <button
            className={`shadow-sm py-2 px-5 bg-white dark:bg-[#2f354b] focus:bg-[#f45c51] focus:text-[#3f455b] rounded-3xl hover:outline-2 hover:outline-[#f45c51] hover:cursor-pointer text-[#09153e] dark:text-[#f1f5f8] text-[19px] border-2 border-transparent hover:border-2 hover:border-[#eef8fa] dark:border-[2px] dark:border-[#3f455b] dark:hover:border-[#1f2535]
              ${ active === 'active' ? 'bg-[#f45c51] dark:bg-[#f45c51]':'dark:hover:bg-[#525868]'}`}
            onClick={filterDataIsActive}
          >
            Active
          </button>
          <button
            className={`shadow-sm py-2 px-5 bg-white dark:bg-[#2f354b] focus:bg-[#f45c51] focus:text-[#3f455b] rounded-3xl hover:outline-2 hover:outline-[#f45c51] hover:cursor-pointer text-[#09153e] dark:text-[#f1f5f8] text-[19px] border-2 border-transparent hover:border-2 hover:border-[#eef8fa] dark:border-[2px] dark:border-[#3f455b] dark:hover:border-[#1f2535]
              ${ active === 'inactive' ? 'bg-[#f45c51] dark:bg-[#f45c51]':'dark:hover:bg-[#525868]'}`}
            onClick={filterDataInactive}
          >
            Inactive
          </button>
        </div>
      </section>
      <section className="max-w-[1170px] mx-auto mt-[11px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[15px] ">
          {dataFilter.map((item) => (
            <div
              key={item.name}
              className="bg-white dark:bg-[#1f2535] p-[20px] shadow-sm rounded-2xl flex flex-col justify-between h-full min-h-[199px] dark:border-[2px] dark:border-[#3f455b]"
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
                  className="shadow-sm py-2 px-[19px] focus:bg-[#f45c51] focus:text-[#3f455b] rounded-3xl hover:cursor-pointer text-[#09153e] dark:text-[#f8fcff] text-[14px] border-2 border-transparent dark:border-[2px] dark:border-[#3f455b] hover:outline-2 hover:outline-[#f45c51] hover:border-2 hover:border-[#FFFFFF] dark:hover:border-[#1f2535] dark:hover:bg-[#525868]"
                  onClick={() => {
                    removeItem(item.name);
                  }}
                >
                  Remove
                </button>
                <div className="mt-[2px] hover:border-2 hover:border-white hover:outline-2 hover:outline-[#f45c51] dark:hover:border-[#1f2535] rounded-full">
                  <div
                    className={`w-[35px] h-[20px] flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                      item.isActive ? "bg-check" : "bg-gray-400"
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
          ))}
        </div>
      </section>
    </>
  );
}
export default Grid;
