type SearchProps = {
  query: string;
  setQuery: (value: string) => void;
};

export const Search = ({ query, setQuery }: SearchProps) => {
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
