import React from 'react';
import './App.css';
import { HomePage, HatsPage } from './pages/homepage/HomePage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
