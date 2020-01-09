import React from "react";
import Board from "./Board";
import calculateWinner from "./caculationWinner";
type GameProps = {
  onClick: () => void;
};
const Game: React.FC = () => {
  const [xNext, setxNext] = React.useState(true);
  const [history] = React.useState<string[][]>([]);

  const handleClick = (index: number) => {
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          // squares={history[history?.length - 1]}
          // xNext={xNext}
          // handleClick={handleClick}
        />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};
export default Game;
