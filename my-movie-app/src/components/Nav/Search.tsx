import { useEffect, useRef } from "react";

type SearchProps = {
  query: string;
  setQuery: (value: string) => void;
};

export const Search = ({ query, setQuery }: SearchProps) => {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const callback = (e) => {
      if (document.activeElement === inputEl.current) return;

      if (e.code === "Enter") {
        if (inputEl.current) {
          inputEl.current.focus();
        }
        setQuery("");
      }
    };

    document.addEventListener("keydown", callback);

    return () => document.addEventListener("keydown", callback);
  }, [setQuery]);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search for movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};
