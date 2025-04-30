import { useState } from "react";
import { MovieList } from "./MovieList";

export const MovieBox = () => {
  const [isOpen1, setIsOpen1] = useState<boolean>(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "-" : "+"}
      </button>
      {isOpen1 && <MovieList />}
    </div>
  );
};
