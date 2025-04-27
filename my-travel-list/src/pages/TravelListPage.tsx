import { Logo } from "../components/Logo.tsx";
import { Form } from "../components/Form.tsx";
import { PackingList } from "../components/PackingList.tsx";
import { Statistics } from "../components/Statistics.tsx";
import { useState } from "react";

export const TravelListPage = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
    console.log(items);
  };

  return (
    <div className="grid h-screen grid-rows-custom-parent">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList />
      <Statistics />
    </div>
  );
};
