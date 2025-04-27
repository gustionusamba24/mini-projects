import { Item } from "./Item.tsx";
import { ItemType } from "../schema/ItemType.ts";

type PackingListProps = {
  items: ItemType[];
};

export const PackingList = ({ items }: PackingListProps) => {
  return (
    <main className="flex flex-col items-center justify-between gap-8 bg-black px-12 py-8">
      <div className="no-scrollbar grid h-[300px] grid-cols-4 content-start justify-center gap-x-9 gap-y-6 overflow-y-scroll">
        {items.map((item) => (
          <Item item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-x-6">
        <select className="rounded-sm bg-light-orange px-6 py-2 text-[16px] font-medium uppercase text-white focus:outline-none focus:ring-4 focus:ring-dark-orange">
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button
          type="button"
          className="rounded-sm bg-light-orange px-6 py-2 text-[16px] font-medium uppercase text-white focus:outline-none focus:ring-4 focus:ring-dark-orange"
        >
          Clear List
        </button>
      </div>
    </main>
  );
};
