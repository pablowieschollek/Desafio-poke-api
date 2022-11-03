import React, {useContext, useState, useEffect} from "react";
import Card from '../components/Card';
import { useParams } from "react-router-dom";
import context from '../Mycontext';

const Details = () => {

    const {name} = useParams();
    const [pokemon, setPokemon] = useState({})
    const fetchPokemon = async () => {
        try {
            const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await res.json();
            setPokemon(data);
        }catch (e){
            console.error(e.message)
        }
    };

    useEffect(() => {
        fetchPokemon();
      }, []);

if (pokemon.hasOwnProperty("sprites")) {
    return (
        <div>
            <Card pokemon={pokemon}/>
        </div>
    );
}
}

export default Details