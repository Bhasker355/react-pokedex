// import React, { Component } from "react";
// import "./Pokedex.css";
// import Pococard from "./Pococard";

// class Pokedex extends Component {
//   static defaultProps = {
//     pokeman: [
//       { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
//       { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
//       { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
//       { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
//       { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
//       { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
//       { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
//       { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
//     ],
//   };
//   render() {
//     return (
//       <div className="pokedex">
//         {this.props.pokeman.map((e) => (
//           <Pococard className='pococard-ind'
//             id={e.id}
//             name={e.name}
//             type={e.type}
//             base_experience={e.base_experience}
//           />
//         ))}

//       </div>
//     );
//   }
// }

// export default Pokedex;
