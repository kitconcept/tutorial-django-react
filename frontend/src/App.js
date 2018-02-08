import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    request
      .get('http://127.0.0.1:8000/users/1/')
      .set('Accept', 'application/json')
      .then(response => response.body)
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
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Username: {this.state.user.username}</p>
        <p>E-Mail: {this.state.user.email}</p>
      </div>
    );
  }
}

export default App;
