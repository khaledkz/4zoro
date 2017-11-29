import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Menu from '../../components/menu/menu';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Categories from '../../components/category/category';
import About from '../../components/about/about';
import Setting from '../setting/setting';
import Login from '../../components/login/login'
class App extends Component {
  render() {
    return (
      
      <Router>
      <div>
        <Menu />
        
        <Route exact path="/" component={Categories} />
        <Route path="/about" component={About} />
        <Route path="/categories" exact component={Menu} /> 
        <Route path="/setting" exact component={Setting} /> 
        <Route path="/login" exact component={Login} /> 

        {/* <Route path="/articles/:articleId" component={Menu} /> */}
        {/* <Route path="/categories/:categoryId" component={Menu} /> */}
      </div>
    </Router>

    );
  }
}

export default App;
