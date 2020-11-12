import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

import Home from './components/Home'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
