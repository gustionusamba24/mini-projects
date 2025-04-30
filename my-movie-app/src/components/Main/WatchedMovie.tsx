type WatchedMovieProps = {
  title: string;
  poster: string;
  userRating: number;
  runtime: number;
};

export const WatchedMovie = ({
  title,
  poster,
  userRating,
  runtime,
}: WatchedMovieProps) => {
  return (
    <li>
      <img src={poster} alt={`${title} poster`} />
      <h3>{title}</h3>
      <div>
        <p>
          <span>⭐</span>
          <span>{userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{runtime} min</span>
        </p>
      </div>
    </li>
  );
};
