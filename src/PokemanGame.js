import React, { Component } from "react";
import "./PokemanGame.css";
import Pococard from "./Pococard";

class PokemanGame extends Component {
  static defaultProps = {
    pokeman: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokeman];

    while (hand1.length < hand2.length) {
      let radInd = Math.floor(Math.random() * hand2.length);
      let radIndArr = hand2.splice(radInd, 1)[0];
      hand1.push(radIndArr);
    }
    // function exp(el) {
    //   el.reduce((expe, pokeman) => expe + pokeman.base_experience, 0);
    // }
    let exp1 = hand1.reduce(
      (expe, pokeman) => expe + pokeman.base_experience,
      0
    );
    let exp2 = hand2.reduce(
      (expe, pokeman) => expe + pokeman.base_experience,
      0
    );

    let isWinner1 = exp1 > exp2 ? "Hand1 is Winner" : "Hand1 is Losser";
    let isWinner2 = exp2 > exp1 ? "Hand2 is Winner" : "Hand2 is Losser";

    return (
      <div>
        <div className="pokedex">
          {hand1.map((e) => (
            <Pococard
              className="pococard-ind"
              id={e.id}
              name={e.name}
              type={e.type}
              base_experience={e.base_experience}
              totalexp={exp1}
            />
          ))}
        </div>
        <div className={isWinner1 === "Hand1 is Winner" ? "winner" : "losser"}>
          <h3>{isWinner1}</h3>
          <span>Total Exp:{exp1}</span>
        </div>

        <div className="pokedex">
          {hand2.map((e) => (
            <Pococard
              className="pococard-ind"
              id={e.id}
              name={e.name}
              type={e.type}
              base_experience={e.base_experience}
              totalexp={exp2}
            />
          ))}
        </div>
        <div className={isWinner2 === "Hand2 is Winner" ? "winner" : "losser"}>
          <h3>{isWinner2}</h3>
          <span>Total Exp:{exp2}</span>
        </div>
      </div>
    );
  }
}

export default PokemanGame;
