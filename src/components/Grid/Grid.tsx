import data from "../../data/data.json";

function Grid() {
  return (
    <section className="max-w-[1170px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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
      </div>
    </section>
  );
}
export default Grid;
