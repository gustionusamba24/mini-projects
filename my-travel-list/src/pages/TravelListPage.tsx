import { Logo } from "../components/Logo.tsx";
import { Form } from "../components/Form.tsx";
import { PackingList } from "../components/PackingList.tsx";
import { Statistics } from "../components/Statistics.tsx";
import { useState } from "react";
import { ItemType } from "../schema/ItemType.ts";

export const TravelListPage = () => {
  const [items, setItems] = useState<ItemType[]>([]);

  const handleAddItem = (item: ItemType) => {
    setItems((items) => [...items, item]);
  };

  const handleRemoveItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="grid h-screen grid-rows-custom-parent">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onRemoveItem={handleRemoveItem} />
      <Statistics />
    </div>
  );
};
