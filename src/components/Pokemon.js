import React from "react";
import "../App.css";

//Tenemos que hacer un map para recorrer "type", que tiene dos valores en varias ocasiones, lo podemos pasar con el nombre de la constante después
function Pokemon(props) {
  const typeList = props.pokemon.types.map((type) => {
    return (
      <div key={type}>
        {" "}
        <p className="type">{type}</p>
      </div>
    );
  });
  //Aquí pasamos una a una todas las propiedades. En la última hay que hacer un if porque no podemos pasarlo por default props. Tienen valor de null, así que siempre se va a pasar algo y el defaultProps no va a funcionar
  return (
    <>
      <div className="pokemon-container" key={props.pokemon.id}>
        <img src={props.pokemon.url} alt="Pokemon"></img>
        <h3> Name : {props.pokemon.name.toUpperCase()}</h3>
        <strong>Type:</strong> {typeList}
        <div>
          <strong>Evolution:</strong>{" "}
          {props.pokemon.evolution !== null
            ? props.pokemon.evolution
            : "This pokemon does not evolve"}
        </div>
      </div>
    </>
  );
}

export default Pokemon;
