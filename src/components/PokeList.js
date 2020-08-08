import React from "react";
import "../styles/App.css";
import Pokemon from "./Pokemon";

function PokeList(props) {
  const PokemonsList = props.pokelist.map((pokemon) => {
    return (
      <li>
        <Pokemon pokemon={pokemon} key={pokemon.id} />
      </li>
    );
  });
  return <div className="main-container">{PokemonsList}</div>;
}

export default PokeList;
