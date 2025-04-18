function ExtensionList () {
    
    return (
        <section className="max-w-[1170px] mx-auto flex justify-between">
            <div>
                <h1>Extensions List</h1>
            </div>
            <div className="flex gap-[10px]">
                <button>All</button>
                <button>Active</button>
                <button>Inactive</button>
            </div>
        </section>
    )
}
export default ExtensionList;