import { useEffect, useState } from "react";
import { Main } from "./components/Main/Main";
import { NavBar } from "./components/Nav/NavBar";
import { MovieDto } from "./dto/MovieDto";
import { Search } from "./components/Nav/Search";
import { NumResult } from "./components/Nav/NumResult";
import { Box } from "./components/Main/Box";
import { MovieList } from "./components/Main/MovieList";
import { WatchedDto } from "./dto/WatchedDto";
import { WatchedSummary } from "./components/Main/WatchedSummary";
import { WatchedMovieList } from "./components/Main/WatchedMovieList";
import { Loader } from "./components/Main/Loader";

const tempMovieData: MovieDto[] = [
  {
    imdbID: "tt1375666",
    title: "Inception",
    year: "2010",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    title: "The Matrix",
    year: "1999",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    title: "Parasite",
    year: "2019",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData: WatchedDto[] = [
  {
    imdbID: "tt1375666",
    title: "Inception",
    year: "2010",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    title: "Back to the Future",
    year: "1985",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const KEY = "c83dfaf0";

export const App = () => {
  const [movies, setMovies] = useState<MovieDto[]>([]);
  const [watched, setWatched] = useState<WatchedDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const query = "godzilla";

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
      );
      const data = await res.json();
      setMovies(data.Search);
      setIsLoading(false);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <NavBar>
        <Search />
        <NumResult movies={movies} />
      </NavBar>

      <Main>
        <Box>{isLoading ? <Loader /> : <MovieList movies={movies} />}</Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
};
