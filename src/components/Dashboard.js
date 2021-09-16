import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import About from '../pages/About';
import Users from '../pages/Users';
import Home from '../pages/Home';
import { useState } from "react";

function Dashboard() {

    const [pokemon, setPokemon] = useState("");

    const handlePokemon = (pokemon) => { 
        console.log('AQUI', pokemon);
        setPokemon(pokemon);
    };

    return (
        <div>
            <Switch>
                
                <Route path="/users"> 
                    <Users sendPokemon={handlePokemon}/> 
                </Route>
                <Route path="/about"> 
                    <About name={pokemon}/> 
                </Route>    
                <Route path="/"> 
                    <Home/> 
                </Route>
            </Switch>
        </div>
    );
}

export default Dashboard;