import { useState } from "react";
import dataJson from "../../data/data.json";

function Grid() {
  const [data, setData] = useState(dataJson);

  const filterDataIsActive = () => {
    const activeItems = dataJson.filter((item) => item.isActive);
    setData(activeItems);
  };

  const filterDataInactive = () => {
    const activeItems = dataJson.filter((item) => !item.isActive);
    setData(activeItems);
  };

  const resetFilter = () => setData(dataJson);

  const removeItem = (index) => {
    const updatedItems = data.filter((item) => item.name != index);
    setData(updatedItems)
  }
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
          {data.map((item) => (
            <div key={item.name}>
              <div className="flex">
                <div>
                  <img src={item.logo} alt={item.name} />
                </div>
                <div>
                  <div>{item.name}</div>
                  <div>{item.description}</div>
                </div>
              </div>
              <div className="flex">
                <button onClick={() => {removeItem(item.name)}}>remove</button>
                <div>button</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Grid;
