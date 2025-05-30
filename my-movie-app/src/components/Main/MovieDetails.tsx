import { useEffect, useState } from "react";
import { MovieDetailsDto } from "../../dto/MovieDetailsDto";
import { StarRating } from "../StarRating/StarRating";
import { Loader } from "./Loader";
import { WatchedDto } from "../../dto/WatchedDto";
import { ErrorMessage } from "./ErrorMessage";

type MovieDetailsProps = {
  watched: WatchedDto[];
  selectedId: string;
  onCloseMovie: () => void;
  onAddWatched: (movie: WatchedDto) => void;
};

// const apiKey = import.meta.env.VITE_API_KEY;
const apiKey = "c83dfaf0";

export const MovieDetails = ({
  watched,
  selectedId,
  onCloseMovie,
  onAddWatched,
}: MovieDetailsProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [userRating, setUserRating] = useState<number>(0);
  const [movie, setMovie] = useState<MovieDetailsDto>({
    Title: "",
    Year: "",
    Poster: "",
    Runtime: "",
    imdbRating: "",
    Plot: "",
    Released: "",
    Actors: "",
    Director: "",
    Genre: "",
  });

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId,
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const handleAdd = () => {
    const newWatchedMovie: WatchedDto = {
      imdbID: selectedId,
      Title: title,
      Year: year,
      Poster: poster,
      Runtime: Number(runtime.split(" ")[0]),
      imdbRating: Number(imdbRating),
      userRating,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  };

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&i=${selectedId}`,
        );
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        setError((err as TypeError).message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `MOVIE: ${title}`;

    return () => {
      document.title = "Wamee";
    };
  }, [title]);

  return (
    <div className="details">
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &#x2190;
            </button>
            <img src={poster} alt={`Poster of ${title}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDB Rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <StarRating
                  maxRating={10}
                  size={24}
                  onSetRating={setUserRating}
                />
              ) : (
                <p>
                  You rated this movie {watchedUserRating} <span>🌟</span>
                </p>
              )}
            </div>
            {userRating > 0 && (
              <button className="btn-add" onClick={handleAdd}>
                Add to watch
              </button>
            )}
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring: {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};
