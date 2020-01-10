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
  return (
    <div>
      <div className="board-row">
        {RenderSquare(0)}
        {RenderSquare(1)}
        {RenderSquare(2)}
      </div>
      <div className="board-row">
        {RenderSquare(3)}
        {RenderSquare(4)}
        {RenderSquare(5)}
      </div>
      <div className="board-row">
        {RenderSquare(6)}
        {RenderSquare(7)}
        {RenderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
