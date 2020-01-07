import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { type } from "os";
import Board from "./component/Board";
const App: React.FC = () => {
  return (
    <div>
      <Board />
    </div>
  );
};
class Game extends React.Component {}
export default App;
