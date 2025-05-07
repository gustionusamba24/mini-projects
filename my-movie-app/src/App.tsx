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
import { MovieDto } from "./dto/MovieDto";

const apiKey = import.meta.env.VITE_API_KEY;

export const App = () => {
  const [movies, setMovies] = useState<MovieDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [selectedId, setSeletectedId] = useState<string | null>(null);
  const [watched, setWatched] = useState<WatchedDto[]>(() => {
    const storedValue = localStorage.getItem("watched");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  const handleSelectMovie = (id: string) =>
    setSeletectedId((selectedId) => (id === selectedId ? null : id));

  const handleCloseMovie = () => setSeletectedId(null);

  const handleAddWatched = (movie: WatchedDto) => {
    setWatched((watched) => [...watched, movie]);

    // localStorage.setItem("watched", JSON.stringify([...watched, movie]));
  };

  const handleDeleteWatched = (id: string) =>
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`,
          { signal: controller.signal },
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movie");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        if ((err as TypeError).name !== "AbortError") {
          setError((err as TypeError).message);
        }
      } finally {
        setIsLoading(false);
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
    };

    handleCloseMovie();
    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

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
