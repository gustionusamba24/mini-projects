type MovieDetailsProps = {
  selectedId: string;
  onCloseMovie: () => void;
};

export const MovieDetails = ({
  selectedId,
  onCloseMovie,
}: MovieDetailsProps) => {
  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &#x2190;
      </button>
      {selectedId}
    </div>
  );
};
