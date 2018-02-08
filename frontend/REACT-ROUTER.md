# React Router

create-react-app my-app
cd my-app
yarn install

Install react-router:

```bash:
yarn add react-router-dom
```

Wrap the App into a 'BrowserRouter' element in index.js:

```JavaScript:

import { BrowserRouter } from "react-router-dom";

...

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ),
  document.getElementById('root')
);
```

App.js:

```JavaScript:

import { NavLink, Switch, Route } from "react-router-dom";

render() {
  return <div className="App">
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
  </div>;
}```

Three new components:

```JavaScript:
const Home = () => <div className="home">
    <h1>Welcome</h1>
    <p>Welcome to my page!</p>
  </div>;

const About = () => <div className="about">
    <h1>About Me</h1>
    <p>This is about me!</p>
  </div>;

const Contact = () => <div className="contact">
    <h1>Contact Me</h1>
    <p>Contact me via email!</p>
  </div>;```

# Tests

App.test.js:

```JavaScript:
import { BrowserRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
```
