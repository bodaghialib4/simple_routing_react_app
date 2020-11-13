import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

import Home from './components/Home'
import Product from "./components/Product";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/products/:product" component={Product}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>

        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
