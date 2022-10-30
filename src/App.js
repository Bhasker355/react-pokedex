import React, { Component } from "react";
import "./App.css";
// import Pococard from "./Pococard";
// import "./Pococard.css";
import PokemanGame from "./PokemanGame";
import "./PokemanGame.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="App">Pokedex</h1>
        <PokemanGame />
      </div>
    );
  }
}
export default App;
