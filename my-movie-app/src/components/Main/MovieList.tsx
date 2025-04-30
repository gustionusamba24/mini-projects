import { MovieDto } from "../../dto/MovieDto";
import { Movie } from "./Movie";

export const MovieList = ({ movies }: { movies: MovieDto[] }) => {
  return (
    <ul className="list">
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          title={movie.title}
          poster={movie.poster}
          year={movie.year}
        />
      ))}
    </ul>
  );
};
