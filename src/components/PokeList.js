import React from "react";
import "../App.css";
import Pokemon from "./Pokemon";

//Aquí es .pokelist porque es el parámetro con nombramos la lista de pokemons que a su vez venía del estado y este del json
//El parámetro del map es inventado, puede ser el que queramos
function PokeList(props) {
  const PokemonsList = props.pokelist.map((pokemon) => {
    return <Pokemon pokemon={pokemon} key={pokemon.id} />;
  });
  //Solo queremos que esta lista nos devuelva un único pokemon por cada uno de la lista, será en el archivo Pokemon donde especifiquemos qué queremos dentro de cada uno
  return <div className="main-container">{PokemonsList}</div>;
}

export default PokeList;
