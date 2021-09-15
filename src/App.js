import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <div>
          <Header/>
          <Dashboard/>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
