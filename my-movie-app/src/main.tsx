import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StarRating } from "./components/StarRating/StarRating";
// import "./index.css";
// import { App } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StarRating maxRating={5} />
    <StarRating maxRating={10} color="#FE7743" size={24} />
    <StarRating maxRating={20} color="#FF6363" size={20} />
  </StrictMode>,
);
