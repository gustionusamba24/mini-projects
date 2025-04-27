import { Item } from "./Item.tsx";
import { ItemType } from "../schema/ItemType.ts";
import { useState } from "react";

type PackingListProps = {
  items: ItemType[];
  onRemoveItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearItemList: () => void;
};

export const PackingList = ({
  items,
  onRemoveItem,
  onToggleItem,
  onClearItemList,
}: PackingListProps) => {
  const [sortBy, setSortBy] = useState<string>("input");

  let sortedItems: ItemType[] = [];

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  }

  return (
    <main className="flex flex-col items-center justify-between gap-8 bg-black px-12 py-8">
      <div className="no-scrollbar grid h-[300px] grid-cols-4 content-start justify-center gap-x-9 gap-y-6 overflow-y-scroll">
        {sortedItems.map((item) => (
          <Item
            id={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
            onRemoveItem={onRemoveItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-x-6">
        <select
          className="rounded-sm bg-light-orange px-6 py-2 text-[16px] font-medium uppercase text-white focus:outline-none focus:ring-4 focus:ring-dark-orange"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button
          className="rounded-sm bg-light-orange px-6 py-2 text-[16px] font-medium uppercase text-white focus:outline-none focus:ring-4 focus:ring-dark-orange"
          type="button"
          onClick={onClearItemList}
        >
          Clear List
        </button>
      </div>
    </main>
  );
};
