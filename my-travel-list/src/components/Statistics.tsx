import { ItemType } from "../schema/ItemType.ts";
import { StatisticsMessage } from "./StatisticsMessage.tsx";

type StatisticsProps = {
  items: ItemType[];
};

export const Statistics = ({ items }: StatisticsProps) => {
  if (!items.length)
    return (
      <StatisticsMessage>
        Start adding the items to your packing list
      </StatisticsMessage>
    );

  let numItems = items.length;
  let numPacked = items.filter((item) => item.packed).length;
  let percentage = Math.round((numPacked / numItems) * 100);
  let message =
    percentage === 100
      ? "You already got everything packed! Ready to go"
      : `You have ${Number(numItems)} items on your list and you already packed ${Number(numPacked)} (${Number(percentage)}%)`;

  return (
    <>
      <StatisticsMessage>{message}</StatisticsMessage>
    </>
  );
};
