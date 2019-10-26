import React, { Component } from 'react';
import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar"
import About from "./components/About";
import Contact from "./components/Contact";
import Scrollspy from 'react-scrollspy'

class ScrollView extends Component {

  render() {

    return (
      <div>
        <NavBar/>
        <Landing/>
        <Portfolio/>
        <About/>
        <Contact/>
      </div>
      
    );
    }
  }

export default ScrollView;
