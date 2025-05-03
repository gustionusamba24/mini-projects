type MovieProps = {
  Title: string;
  Poster: string;
  Year: string;
};

export const Movie = ({ Title, Poster, Year }: MovieProps) => {
  return (
    <li>
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
