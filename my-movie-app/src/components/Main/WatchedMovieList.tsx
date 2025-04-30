import { WatchedDto } from "../../dto/WatchedDto";
import { WatchedMovie } from "./WatchedMovie";

type WatchedListProps = {
  watched: WatchedDto[];
};

export const WatchedMovieList = ({ watched }: WatchedListProps) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          title={movie.title}
          poster={movie.poster}
          userRating={movie.userRating}
          runtime={movie.runtime}
        />
      ))}
    </ul>
  );
};
