import { Logo } from "../Components/Logo.tsx";
import { Form } from "../Components/Form.tsx";
import { PackingList } from "../Components/PackingList.tsx";
import { Statistics } from "../Components/Statistics.tsx";

export const TravelListPage = () => {
  return (
    <div className="grid-rows-custom-parent grid h-screen">
      <Logo />
      <Form />
      <PackingList />
      <Statistics />
    </div>
  );
};
