type MovieProps = {
  title: string;
  poster: string;
  year: string;
};

export const Movie = ({ title, poster, year }: MovieProps) => {
  return (
    <li>
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
