import React, { useState } from "react";
import "./App.css";
import pokeListFromJson from "./data/pokelist.json";
import PokeList from "./components/PokeList";

function App() {
  const [pokemons /* , setPokemon] */] = useState(pokeListFromJson); //Pasamos el json por el estado aunque en este caso no necesitamos la función porque no hay eventos
  return (
    <div className="App">
      <h1>My Pokédex</h1>
      <PokeList pokelist={pokemons} />
    </div>
  );
}
//pokemons = pokeListFromJson, que la pasamos como prop a PokeList, así la encontraremos allí (pokelist)

export default App;
