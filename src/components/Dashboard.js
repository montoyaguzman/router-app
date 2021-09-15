import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import About from '../pages/About';
import Users from '../pages/Users';
import Home from '../pages/Home';

function Dashboard() {
    return (
        <div>
            <Switch>
                
                <Route path="/users"> <Users/> </Route>
                <Route path="/about"> <About/> </Route>    
                <Route path="/"> <Home/> </Route>
            </Switch>
        </div>
    );
}

export default Dashboard;