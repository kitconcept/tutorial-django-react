import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Route, Link } from 'react-router-dom';
import Users from './Users';

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>This is my home!</p>
  </div>
);

const About = () => (
  <div>
    <h1>About Us</h1>
    <p>This is me!</p>
  </div>
);

const App = () => (
  <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
        <Link to="/users">Users</Link>
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/users" component={Users} />
      </main>
    </div>
  </div>
);

export default App;
