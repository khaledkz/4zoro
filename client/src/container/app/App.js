import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Menu from '../../components/menu/menu'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Categories from '../../components/category/categoryCard'

class App extends Component {
  render() {
    return (
      
      <Router>
      <div>
        <Menu />
        
        <Route exact path="/" component={Categories} />
        <Route path="/about" component={Menu} />
        <Route path="/categories" exact component={Menu} /> 
        <Route path="/articles/:articleId" component={Menu} />
        <Route path="/categories/:categoryId" component={Menu} />
      </div>
    </Router>

    );
  }
}

export default App;
