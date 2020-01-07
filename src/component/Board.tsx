import React from "react";
import Square from './Square'
type BoardProps = {
    //squares : number[]
  };
  type BoardState = {
    squares: string[];
    xNext: boolean;
  };
  class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xNext: true
      };
    }
    handleClick(i: number) {
      const squares = this.state.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xNext ? "X" : "O";
      this.setState({
        squares: squares,
        xNext: !this.state.xNext
      });
      console.log(i, this.state.squares[i], squares[i]);
    }
    renderSquare(i: number) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => {
            this.handleClick(i);
          }}
        />
      );
    }
    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if (winner) {
        status = "Player Win : " + winner;
      } else {
        status = "Next player: " + (this.state.xNext ? "X" : "O");
      }
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  function calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
export default Board;