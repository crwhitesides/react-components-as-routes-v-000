import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink
      exact
      to="/"
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      exact
      to="/about"
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      exact
      to="/login"
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
  </div>

const Home = () => <h1>Home</h1>

const About = () => <h1>About</h1>

const Login = () =>
  <div>
    <h1>Login</h1>
    <form>
      <div>
        <input
          type="text"
          name="username"
          placeholder="username"/>
        <label htmlFor="username">Username</label>
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"/>
        <label htmlFor="password">Password</label>
      </div>
      <input type="submit" value="login"/>
    </form>
  </div>

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
