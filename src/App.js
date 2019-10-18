import React, { Component } from 'react';
import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {

  render() {
    return(
       <div>
      <ul class="nav">
          <li>
            <Link to="/landing">Landing</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
      </ul>
        <Landing/>
        <Portfolio/>
        <About/>
        <Contact/>
      </div>
    )
  }
}

export default App