import React from "react";
import Board from "./Board";
import calculateWinner from "./caculationWinner";

export type Squares = string[];

type GameProps = {
  onClick: () => void;
};
const Game: React.FC = () => {
  const [xNext, setxNext] = React.useState(true);
  const [history, setHistory] = React.useState<Squares[]>([
    Array(9).fill(null)
  ]);
  const [stepNumber, setStepNumber] = React.useState(0);

  console.log(stepNumber, history);

  const squares = React.useMemo(() => history[stepNumber].slice(), [
    history,
    stepNumber
  ]);

  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Player Win : " + winner;
  } else {
    status = "Next player: " + (xNext ? "X" : "O");
  }

  const handleClick = (index: number) => {
    const _history = history.slice(0, stepNumber + 1);

    const _squares = _history[_history.length - 1].slice();
    if (calculateWinner(_squares) || _squares[index]) {
      return;
    }
    //setStepNumber(stepNumber+1)
    _squares[index] = xNext ? "X" : "O";
    // setHistory([...history, squares]);

    _history.push(_squares);

    setHistory(_history);
    setStepNumber(stepNumber + 1);
    setxNext(!xNext);
  };

  const callback = (index: number) => {};

  const jumpTo = (step: number) => {
    console.error(step);
    setStepNumber(step);
    setxNext(step % 2 === 0);
  };
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move :" + move : "Go to game start";
    return (
      <li key={move}>
        <button
          onClick={() => {
            jumpTo(move);
          }}
        >
          {desc}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} handleClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
export default Game;
