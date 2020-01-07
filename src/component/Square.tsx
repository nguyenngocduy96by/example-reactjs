import React from "react";
type SquareProps = {
    value: string;
    onClick: () => void;
  };
  type SquareState = {
    value: string | null;
  };
  function Square(props: SquareProps) {
    return (
      <button
        className="square"
        onClick={() => {
          props.onClick();
        }}
      >
        {props.value}
      </button>
    );
  }
export default Square;