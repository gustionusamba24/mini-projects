import { useState } from "react";

export const Search = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <input
      className="search"
      type="text"
      placeholder="Search for movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};
