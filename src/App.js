import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

import Home from './components/Home'
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/products/:product" component={Product}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
