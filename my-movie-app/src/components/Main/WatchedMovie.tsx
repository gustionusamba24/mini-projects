type WatchedMovieProps = {
  imdbID: string;
  title: string;
  poster: string;
  userRating: number;
  imdbRating: number;
  runtime: number;
  onDeleteWatched: (id: string) => void;
};

export const WatchedMovie = ({
  imdbID,
  title,
  poster,
  userRating,
  imdbRating,
  runtime,
  onDeleteWatched,
}: WatchedMovieProps) => {
  return (
    <li>
      <img src={poster} alt={`${title} poster`} />
      <h3>{title}</h3>
      <div>
        <p>
          <span>⭐</span>
          <span>{imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{runtime} min</span>
        </p>

        <button className="btn-delete" onClick={() => onDeleteWatched(imdbID)}>
          X
        </button>
      </div>
    </li>
  );
};
