import { WatchedDto } from "../../dto/WatchedDto";
import { WatchedMovie } from "./WatchedMovie";

type WatchedListProps = {
  watched: WatchedDto[];
  onDeleteWatched: (id: string) => void;
};

export const WatchedMovieList = ({
  watched,
  onDeleteWatched,
}: WatchedListProps) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          imdbID={movie.imdbID}
          title={movie.Title}
          poster={movie.Poster}
          userRating={movie.userRating}
          imdbRating={movie.imdbRating}
          runtime={movie.Runtime}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
};
