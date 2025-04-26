export const Form = () => {
  return (
    <form className="flex items-center justify-center gap-x-36 py-5">
      <h3 className="text-2xl font-semibold text-light-orange">
        What do you need for a trip?
      </h3>
      <div className="flex items-center justify-center gap-4">
        <select className="rounded border border-dark-orange bg-gray px-6 py-2 text-[18px] font-medium text-white outline-none focus:border-light-orange focus:ring-2 focus:ring-light-orange">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="rounded border border-dark-orange bg-gray px-6 py-2 text-[18px] font-medium text-white outline-none placeholder:text-white focus:border-light-orange focus:ring-2 focus:ring-light-orange"
          type="text"
          placeholder="Item..."
        />
        <button
          type="button"
          className="rounded bg-light-orange px-6 py-2 text-[18px] font-medium uppercase text-white focus:outline-none focus:ring-4 focus:ring-dark-orange"
        >
          Add
        </button>
      </div>
    </form>
  );
};
