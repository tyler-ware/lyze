import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from '../images/logo.svg';
import './App.css';
import BarChart from './BarChart';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/">Landing</Link>
            <Link to="/new">New</Link>
            <Link to="/open">Open</Link>
            <Route exact={true} path="/" render={() => (            
              <p>
              Edit <code>src/App.js</code> and save to reload.
              </p>
            )} />
            <Route path="/new" render={() => (
              <p> WOOO </p>
            )} />
            <Route path="/new" render={() => (
              <BarChart 
                data={[ 12, 20, 30, 89, 27 ]} 
                size={[100, 50]}
              />
            )}  />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
