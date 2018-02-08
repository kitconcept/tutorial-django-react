import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';

const App = () => (
  <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
      </main>
    </div>
  </div>
);

export default App;
