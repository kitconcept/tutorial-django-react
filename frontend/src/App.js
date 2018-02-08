import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <h1>Welcome</h1>
    <p>Welcome to my page!</p>
  </div>
);

const About = () => (
  <div className="about">
    <h1>About Me</h1>
    <p>This is about me!</p>
  </div>
);

const Contact = () => (
  <div className="contact">
    <h1>Contact Me</h1>
    <p>Contact me via email!</p>
  </div>
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/users/1', {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then(responseData => {
        this.setState({ user: responseData });
        console.log('Fetch from backend successful!');
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
