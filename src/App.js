import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router} from "@reach/router";
import Home from './components/home';
// import MapScreen from './components/mapscreen';
// import 'semantic-ui-css';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/'/>
        {/* <MapScreen path='/map'/> */}
      </Router>
    </div>
  );
}

export default App;
