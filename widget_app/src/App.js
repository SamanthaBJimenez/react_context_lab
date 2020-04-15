import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Homepage } from './components/Homepage';
import { Weather } from './components/Weather';
import { Clock } from './components/Clock';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch >
        <Route exact path={"/home"}>
            <Homepage/>
        </Route>
        <Route path={"/weather"}>
            <Weather/>
        </Route>
        <Route path={"/clock"}>
            <Clock/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
