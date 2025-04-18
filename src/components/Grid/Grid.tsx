import { useEffect, useState } from "react";
import dataJson from "../../data/data.json";

const LOCAL_STORAGE_KEY = "extensionsData";

function Grid() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : dataJson;
  });

  const [dataFilter, setDataFilter] = useState(data)

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
    setData(data)
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
      <section className="max-w-[1170px] mx-auto flex justify-between">
        <div>
          <h1>Extensions List</h1>
        </div>
        <div className="flex gap-[10px]">
          <button onClick={resetFilter}>All</button>
          <button onClick={filterDataIsActive}>Active</button>
          <button onClick={filterDataInactive}>Inactive</button>
        </div>
      </section>
      <section className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {dataFilter.map((item) => (
            <div key={item.name}>
              <div className="flex">
                <div>
                  <img src={item.logo} alt={item.name} />
                </div>
                <div className="bg-white dark:bg-black">
                  <div>{item.name}</div>
                  <div>{item.description}</div>
                </div>
              </div>
              <div className="flex">
                <button
                  onClick={() => {
                    removeItem(item.name);
                  }}
                >
                  remove
                </button>
                <div>
                  <input
                    type="checkbox"
                    checked={item.isActive}
                    onChange={() => changeState(item.name)}
                  />
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
