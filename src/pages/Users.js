import axios from 'axios';
import React, { useEffect } from 'react';

function Users() {

    // componentDidMount
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = (async() => {
        const urlBase = 'https://pokeapi.co/api/v2';
        const pokemon = 'pokemon/ditto'
        const response = await axios.get(`${urlBase}/${pokemon}`);
        console.log('response: ', response)
    });

    return (
        <div>
            users works!
        </div>
    );
}

export default Users;