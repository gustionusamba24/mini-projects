import { RxCross2 } from "react-icons/rx";
import { ItemType } from "../schema/ItemType.ts";

type ItemProps = {
  item: ItemType;
};

export const Item = ({ item }: ItemProps) => {
  return (
    <>
      <div
        className="flex w-[280px] items-center justify-between rounded-md border-2 border-dark-orange bg-gray p-3"
        key={item.id}
      >
        <p className="w-4/6 text-lg font-medium text-white">
          {item.quantity} {item.description}
        </p>
        <div className="flex w-2/6 items-center justify-end">
          <input
            className="mr-2 h-7 w-7 cursor-pointer accent-light-orange"
            type="checkbox"
          />
          <button className="cursor-pointer rounded border-2 border-dark-orange bg-black p-2 text-light-orange hover:border-dark-orange hover:bg-light-orange hover:text-black">
            <RxCross2 size={15} />
          </button>
        </div>
      </div>
      {/*<div className="flex w-[280px] items-center justify-between rounded-md border-2 border-dark-orange bg-dark-orange p-3 line-through decoration-white decoration-2">*/}
      {/*  <p className="w-4/6 text-lg font-medium text-white">Kaus Kaki</p>*/}
      {/*  <div className="flex w-2/6 items-center justify-end">*/}
      {/*    <input*/}
      {/*      className="mr-2 h-7 w-7 cursor-pointer accent-light-orange"*/}
      {/*      type="checkbox"*/}
      {/*    />*/}
      {/*    <button className="cursor-pointer rounded border-2 border-dark-orange bg-black p-2 text-light-orange hover:border-dark-orange hover:bg-light-orange hover:text-black">*/}
      {/*      <RxCross2 size={15} />*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};
