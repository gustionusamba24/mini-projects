import { MovieDto } from "../../dto/MovieDto";
import { Movie } from "./Movie";

type MovieListProps = {
  movies: MovieDto[];
  onSelectMovie: (id: string) => void;
};

export const MovieList = ({ movies, onSelectMovie }: MovieListProps) => {
  return (
    <ul className="list list-movies">
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          imdbID={movie.imdbID}
          Title={movie.Title}
          Poster={movie.Poster}
          Year={movie.Year}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
};
