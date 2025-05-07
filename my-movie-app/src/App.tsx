import { useEffect, useState } from "react";
import { Main } from "./components/Main/Main";
import { NavBar } from "./components/Nav/NavBar";
import { Search } from "./components/Nav/Search";
import { NumResult } from "./components/Nav/NumResult";
import { Box } from "./components/Main/Box";
import { MovieList } from "./components/Main/MovieList";
import { WatchedDto } from "./dto/WatchedDto";
import { WatchedSummary } from "./components/Main/WatchedSummary";
import { WatchedMovieList } from "./components/Main/WatchedMovieList";
import { Loader } from "./components/Main/Loader";
import { ErrorMessage } from "./components/Main/ErrorMessage";
import { MovieDetails } from "./components/Main/MovieDetails";
import { useMovies } from "./hooks/useMovies";

export const App = () => {
  const [query, setQuery] = useState<string>("");
  const [selectedId, setSeletectedId] = useState<string | null>(null);
  const [watched, setWatched] = useState<WatchedDto[]>(() => {
    const storedValue = localStorage.getItem("watched");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);

  function handleSelectMovie(id: string) {
    setSeletectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSeletectedId(null);
  }

  function handleAddWatched(movie: WatchedDto) {
    setWatched((watched) => [...watched, movie]);

    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  }

  const handleDeleteWatched = (id: string) =>
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
};
