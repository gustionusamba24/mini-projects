import { useEffect, useState } from "react";
import { MovieDto } from "../dto/MovieDto";

const apiKey = import.meta.env.VITE_API_KEY;

export const useMovies = (query: string, callback: () => void) => {
  const [movies, setMovies] = useState<MovieDto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    callback?.(); // if callback is exists, then it will run the function

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

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
};
