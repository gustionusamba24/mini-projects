import { MovieDto } from "../../dto/MovieDto";

export const NumResult = ({ movies }: { movies: MovieDto[] }) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};
