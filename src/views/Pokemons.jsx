import React, { useContext, useEffect, useState } from "react";
import context from '../Mycontext';
import { useNavigate } from "react-router-dom";
import  Button  from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Pokemons = () => {
    const navigate = useNavigate();
    const{pokemons} = useContext(context);
    const[pokemon, setPokemon] = useState("");

      const  goToPokemon = () => {
            pokemon ?
             navigate (`/Details/${pokemon}`)
            :alert("Selecciona algún pokemon");
        };
  return (
    <div className="selectcontainer">
        <select onChange={({target}) => setPokemon(target.value)}>
            {pokemons.map((pokemon, index) => (
                <option value={pokemon.name} key={index}>{pokemon.name}</option>
            ))}
        </select>
        <Button className="botton" onClick={goToPokemon}>Ver detalles</Button>
    </div>
  );
};

export default Pokemons 