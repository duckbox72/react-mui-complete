import React from "react";
import { Route, Switch } from "react-router-dom";

import Pokedex from './Pokedex';
import Pokemon from './Pokemon';


export default function App() {
  
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Pokedex {...props} />} />
      <Route path="/:pokemonId" render={(props) => <Pokemon {...props} />} />
    </Switch>
  );
}
