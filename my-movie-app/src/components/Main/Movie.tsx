type MovieProps = {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
  onSelectMovie: (id: string) => void;
};

export const Movie = ({
  imdbID,
  Title,
  Poster,
  Year,
  onSelectMovie,
}: MovieProps) => {
  return (
    <li onClick={() => onSelectMovie(imdbID)}>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{Year}</span>
        </p>
      </div>
    </li>
  );
};
