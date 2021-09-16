import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

function Users(props) {

    // state
    const [pokemon, setPokemon] = useState("");

    // componentDidMount
    useEffect(() => {
        getPokemon();
    }, []);

    useEffect(() => {
        console.log('saliendo', pokemon)
        props.sendPokemon(pokemon);
    }, [pokemon]);

    const getPokemon = (async() => {
        try {
            const urlBase = 'https://pokeapi.co/api/v2';
            const pokemon = 'pokemon/ditto'
            const response = await axios.get(`${urlBase}/${pokemon}`);
            const { data, status } = response;
            setPokemon(data.name);
            console.log(`response (${status}): `, data.name);
        } catch(error) {

        }
    });

    return (
        <div>
            users works! {pokemon !== '' ? <h6>{pokemon}</h6> : 'no existe el pokemon'}
        </div>
         
 
    );
}

export default Users;