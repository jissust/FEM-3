import data from "../../data/data.json";

function Grid() {
  return (
    <section className="max-w-[1170px] mx-auto">
      {data.map((item) => (
        <div>
          <div className="flex">
            <div>Logo</div>
            <div>
              <div>{item.name}</div>
              <div>{item.description}</div>
            </div>
          </div>
          <div className="flex">
            <button>remove</button>
            <div>button</div>
          </div>
        </div>
      ))}
    </section>
  );
}
export default Grid;
