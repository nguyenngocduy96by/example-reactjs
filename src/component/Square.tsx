import React from "react";

type SquareProps = {
  value: string;
  onClick: () => void;
};

const Square:React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      className={value === 'X' ? 'square color-red' : 'square color-blue'}
      onClick={() => {
        onClick();
      }}
    >
      {value}
    </button>
  );
}

export default Square;
