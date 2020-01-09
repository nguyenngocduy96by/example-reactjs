import React, { useState } from "react";
import Square from "./Square";
import calculateWinner from "./caculationWinner";

// type BoardProps = {
//   squares: string[];
//   xNext: boolean;
//   handleClick(index: number): void;
// };

const Board: React.FC = () => {
  const [squares,setSquare] = React.useState(Array(9).fill(null))
  const [xNext, setxNext] = React.useState(true);
  const winner = calculateWinner(squares);
  let status;
  function handleClick(index: number) {
    //const _squares = squares.slice()
    //const _xNext = !xNext;
    console.log("squares:", squares);
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index] = xNext ? "X" : "O";
    setSquare(squares);
    setxNext(!xNext);
    console.log(index, squares[index],);
  }

  const RenderSquare: React.FC<number> = i => {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  };
  if (winner) {
    status = "Player Win : " + winner;
  } else {
    status = "Next player: " + (xNext ? "X" : "O");
  }
  return (
    <div>
      <div className="status">{status}</div>
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
