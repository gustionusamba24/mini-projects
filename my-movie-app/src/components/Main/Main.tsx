import { MovieBox } from "./MovieBox";
import { WatchedBox } from "./WatchedBox";

export const Main = () => {
  return (
    <main className="main">
      <MovieBox />
      <WatchedBox />
    </main>
  );
};
