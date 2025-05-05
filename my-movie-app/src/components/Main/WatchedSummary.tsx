import { WatchedDto } from "../../dto/WatchedDto";

type WatchedSummaryProps = {
  watched: WatchedDto[];
};

const average = (arr: number[]) =>
  Number(arr.reduce((acc, cur) => acc + cur / arr.length, 0).toFixed(2));

export const WatchedSummary = ({ watched }: WatchedSummaryProps) => {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgTime = average(watched.map((movie) => movie.Runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>️#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgTime}</span>
        </p>
      </div>
    </div>
  );
};
