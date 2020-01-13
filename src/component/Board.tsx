import React, { useState } from "react";
import Square from "./Square";
import calculateWinner from "./caculationWinner";
import { Squares } from "./Game";

type BoardProps = {
  squares: Squares;
  handleClick(index: number): void;
};

const Board: React.FC<BoardProps> = ({ squares, handleClick }) => {
  const RenderSquare: React.FC<number> = index => {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  };
  var board_row = [];
  for (var index = 0; index < 9; index++) {
    if (index % 3 == 0) board_row.push(<div className="board-row"></div>);
    board_row.push(
      <span className="indent" key={index}>
        {RenderSquare(index)}
      </span>
    );
  }
  return (
    <div>
      {board_row}
    </div>
  );
};
export default Board;
