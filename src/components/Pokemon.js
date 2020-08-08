import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";

function Pokemon(props) {
  const typeList = props.pokemon.types.map((type) => {
    return (
      <div key={type}>
        {" "}
        <p className="type">{type}</p>
      </div>
    );
  });
  return (
    <>
      <div className="pokemon-container" key={props.pokemon.id}>
        <img src={props.pokemon.url} alt={props.pokemon.name}></img>
        <h3> Name : {props.pokemon.name.toUpperCase()}</h3>
        <strong>Type:</strong>
        <ul>{typeList}</ul>
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
Pokemon.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
  evolution: PropTypes.string,
};

export default Pokemon;
