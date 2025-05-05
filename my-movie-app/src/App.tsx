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
import { ErrorMessage } from "./components/Main/ErrorMessage";
import { MovieDetails } from "./components/Main/MovieDetails";

const KEY = "c83dfaf0";

export const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<MovieDto[]>([]);
  const [watched, setWatched] = useState<WatchedDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [selectedId, setSeletectedId] = useState<string | null>(null);

  const handleSelectMovie = (id: string) =>
    setSeletectedId((selectedId) => (id === selectedId ? null : id));

  const handleCloseMovie = () => setSeletectedId(null);

  const handleAddWatched = (movie: WatchedDto) =>
    setWatched((watched) => [...watched, movie]);

  const handleDeleteWatched = (id: string) =>
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
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
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

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
