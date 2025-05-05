type MovieProps = {
  imdbID: string;
  title: string;
  poster: string;
  year: string;
  onSelectMovie: (id: string) => void;
};

export const Movie = ({
  imdbID,
  title,
  poster,
  year,
  onSelectMovie,
}: MovieProps) => {
  return (
    <li onClick={() => onSelectMovie(imdbID)}>
      <img src={poster} alt={`${title} poster`} />
      <h3>{title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{year}</span>
        </p>
      </div>
    </li>
  );
};
