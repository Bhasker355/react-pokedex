import React, { Component } from "react";
// import Pokedex from "./Pokedex";
import "./Pococard.css";
let img = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pococard extends Component {
  render() {
    let { id, name, type, base_experience } = this.props;

    let imgSrc = `${img}${padToThree(id)}.png`;

    // if (id > 100) {
    //   imgSrc = `${img}${id}.png`;
    // }
    // if (id < 100 && id > 10) {
    //   imgSrc = `${img}0${id}.png`;
    // } else {
    //   imgSrc = `${img}00${id}.png`;
    // }

    // let imgSrc = `${img}${id}.png`;
    return (
      <div className="pococard">
        <h2>{name}</h2>
        <img src={imgSrc} className="imgSrc" />
        <span>Type:{type}</span>
        <span>EXP:{base_experience}</span>
      </div>
    );
  }
}

export default Pococard;
