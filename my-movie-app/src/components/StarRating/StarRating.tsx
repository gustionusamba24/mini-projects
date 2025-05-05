import { useState } from "react";
import { Star } from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

type StarRatingProps = {
  maxRating?: number;
  color?: string;
  size?: number;
  onSetRating?: (rating: number) => void;
};

export const StarRating = ({
  maxRating = 3,
  color = "#fcc419",
  size = 48,
  onSetRating,
}: StarRatingProps) => {
  const [rating, setRating] = useState<number>(0);
  const [tempRating, setTempRating] = useState<number>(0);

  const handleRating = (rating: number) => {
    setRating(rating);
    if (onSetRating) {
      onSetRating(rating);
    }
  };

  const handleTempRating = (rating: number) => {
    setTempRating(rating);
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => handleTempRating(i + 1)}
            onHoverOut={() => handleTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
  );
};
