import { useState } from "react";
import { Main } from "./components/Main/Main";
import { NavBar } from "./components/Nav/NavBar";
import { MovieDto } from "./dto/MovieDto";
import { Search } from "./components/Nav/Search";
import { NumResult } from "./components/Nav/NumResult";
import { MovieBox } from "./components/Main/MovieBox";
import { WatchedBox } from "./components/Main/WatchedBox";
import { MovieList } from "./components/Main/MovieList";

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

export const App = () => {
  const [movies, setMovies] = useState<MovieDto[]>(tempMovieData);

  return (
    <>
      <NavBar>
        <Search />
        <NumResult movies={movies} />
      </NavBar>
      
      <Main>
        <MovieBox>
          <MovieList movies={movies} />
        </MovieBox>
        <WatchedBox />
      </Main>
    </>
  );
};
