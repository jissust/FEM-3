import { useEffect, useState } from "react";
import dataJson from "../../data/data.json";

const LOCAL_STORAGE_KEY = "extensionsData";

function Grid() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return dataJson;
  });

  const [dataFilter, setDataFilter] = useState(data);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const filterDataIsActive = () => {
    const activeItems = data.filter((item) => item.isActive);
    setDataFilter(activeItems);
  };

  const filterDataInactive = () => {
    const activeItems = data.filter((item) => !item.isActive);
    setDataFilter(activeItems);
  };

  const resetFilter = () => {
    setData(data);
    setDataFilter(data);
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
      <section className="max-w-[1170px] mx-auto flex justify-between py-5">
        <div>
          <h1 className="text-[#09153e] text-2xl font-bold">Extensions List</h1>
        </div>
        <div className="flex gap-[10px]">
          <button
            className="shadow-sm py-2 px-5 bg-white focus:bg-red-700 focus:text-white rounded-3xl hover:outline-2 hover:outline-red-700 hover:cursor-pointer text-[#09153e]"
            onClick={resetFilter}
          >
            All
          </button>
          <button
            className="shadow-sm py-2 px-5 bg-white focus:bg-red-700 focus:text-white rounded-3xl hover:outline-2 hover:outline-red-700 hover:cursor-pointer text-[#09153e]"
            onClick={filterDataIsActive}
          >
            Active
          </button>
          <button
            className="shadow-sm py-2 px-5 bg-white focus:bg-red-700 focus:text-white rounded-3xl hover:outline-2 hover:outline-red-700 hover:cursor-pointer text-[#09153e]"
            onClick={filterDataInactive}
          >
            Inactive
          </button>
        </div>
      </section>
      <section className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
          {dataFilter.map((item) => (
            <div
              key={item.name}
              className="bg-white dark:bg-black p-4 shadow-sm rounded-2xl flex flex-col h-full"
            >
              <div className="flex mb-[50px]">
                <div className="w-full max-w-[60px]">
                  <img src={item.logo} alt={item.name} />
                </div>
                <div className="px-4">
                  <div className="text-[#09153e] text-lg font-bold">
                    {item.name}
                  </div>
                  <div>{item.description}</div>
                </div>
              </div>
              <div className="flex w-full justify-between items-center mt-auto">
                <button
                  className="shadow-sm py-2 px-5 bg-white focus:bg-red-700 focus:text-white rounded-3xl hover:outline-2 hover:outline-red-700 hover:cursor-pointer text-[#09153e]"
                  onClick={() => {
                    removeItem(item.name);
                  }}
                >
                  Remove
                </button>
                <div>
                  <div
                    className={`w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                      item.isActive ? "bg-red-500" : "bg-gray-400"
                    }`}
                    onClick={() => changeState(item.name)}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                        item.isActive ? "translate-x-6" : "translate-x-0"
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
