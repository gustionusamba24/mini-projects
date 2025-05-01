import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StarRating } from "./StarRating";
// import "./index.css";
// import { App } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StarRating maxRating={5} />
  </StrictMode>,
);
