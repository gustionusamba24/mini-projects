import { RxCross2 } from "react-icons/rx";

type ItemProps = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
  onRemoveItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

export const Item = ({
  id,
  description,
  quantity,
  packed,
  onRemoveItem,
  onToggleItem,
}: ItemProps) => {
  return (
    <div
      className={`flex w-[280px] items-center justify-between rounded-md border-2 border-dark-orange p-3 ${packed ? "bg-dark-orange line-through decoration-white decoration-2" : "bg-gray"}`}
      key={id}
    >
      <p className="w-4/6 text-lg font-medium text-white">
        {quantity} {description}
      </p>
      <div className="flex w-2/6 items-center justify-end">
        <input
          className="mr-2 h-7 w-7 cursor-pointer accent-light-orange"
          type="checkbox"
          checked={packed}
          onClick={() => onToggleItem(id)}
        />
        <button
          className="cursor-pointer rounded border-2 border-dark-orange bg-black p-2 text-light-orange hover:border-dark-orange hover:bg-light-orange hover:text-black"
          onClick={() => onRemoveItem(id)}
        >
          <RxCross2 size={15} />
        </button>
      </div>
    </div>
  );
};
