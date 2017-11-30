import React, { Component } from 'react';
import './App.css';
import Menu from '../../components/menu/menu';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Categories from '../../components/category/category';
import About from '../../components/about/about';
import Setting from '../setting/setting';
import Login from '../../components/login/login';
import CategoryBox from '../../components/category/categoryBox';
import SingleArticleCard from '../../components/article/singleArticleCard';

class App extends Component {

  render() {
    return (

      <Router>
        <div>
          <Menu />
          <Route exact path="/" component={Categories} />
          <Route path="/about" component={About} />
          <Route path="/categories"   component={Menu} />
          <Route path="/setting"   component={Setting} />
          <Route path="/login"   component={Login} />
          <Route path="/category/:categoryId"   component={CategoryBox} />
          <Route path="/article/:articleId"   component={SingleArticleCard} />
        </div>
      </Router>

    );
  }
}

export default App;
