import React, { useState } from "react";
import Square from "./Square";
import { Squares } from "./Game";

type BoardProps = {
  squares: Squares;
  handleClick(index: number): void;
};

const Board: React.FC<BoardProps> = ({ squares, handleClick }) => {
  const renderSquare = (index:number) => {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  };
  var boardRow = Array(9).fill(0);
  return (
    <div>
      {boardRow.map(function(name, index) {
        return index % 3 !== 0 ? (
          <span key={index}>{renderSquare(index)}</span>
        ) : (
          <React.Fragment>
            <div className="boardRow"></div>
            <span key={index}>{renderSquare(index)}</span>
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default Board;
