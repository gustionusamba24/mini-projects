import { MovieDto } from "../../dto/MovieDto";
import { Movie } from "./Movie";

export const MovieList = ({ movies }: { movies: MovieDto[] }) => {
  return (
    <ul className="list">
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          Title={movie.Title}
          Poster={movie.Poster}
          Year={movie.Year}
        />
      ))}
    </ul>
  );
};
