import React, { useState } from "react";
import Square from "./Square";
import calculateWinner from "./caculationWinner";

function Board() {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [xNext, setxNext] = useState(true);
  const winner = calculateWinner(squares);
  let status;

  function HandleClick(i: number) {
    const _squares = squares.slice();
    const _xNext = ! xNext;
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    _squares[i] = xNext ? "X" : "O";
    setSquare(_squares)
    setxNext(_xNext)
    console.log(i, squares[i],_squares[i]);
  }
  
  function RenderSquare(i: number) {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          HandleClick(i);
        }}
      />
    );
  }
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
}
export default Board;
