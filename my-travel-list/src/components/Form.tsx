import { useState } from "react";
import { ItemType } from "../schema/ItemType.ts";

type FormProps = {
  onAddItem: (item: ItemType) => void;
};

export const Form = ({ onAddItem }: FormProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!description) return;

    const newItem: ItemType = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItem(newItem);

    setQuantity(1);
    setDescription("");
  };

  return (
    <form
      className="flex items-center justify-center gap-x-8 bg-black py-5"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl font-semibold text-light-orange">
        What do you need for a trip?
      </h3>
      <div className="flex items-center justify-center gap-4">
        <select
          className="rounded border border-dark-orange bg-gray px-6 py-2 text-[18px] font-medium text-white outline-none focus:border-light-orange focus:ring-2 focus:ring-light-orange"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="rounded border border-dark-orange bg-gray px-6 py-2 text-[18px] font-medium text-white outline-none placeholder:text-white/60 focus:border-light-orange focus:ring-2 focus:ring-light-orange"
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="rounded bg-light-orange px-6 py-2 text-[18px] font-medium uppercase text-white focus:outline-none focus:ring-4 focus:ring-dark-orange">
          Add
        </button>
      </div>
    </form>
  );
};
