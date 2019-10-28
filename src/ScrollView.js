import React, { Component, useRef} from 'react';
import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Nav, Navbar } from 'react-bootstrap';
import About from "./components/About";
import Contact from "./components/Contact";
import useScrollSpy from 'react-use-scrollspy';

const ScrollView = () => {

  const sectionsRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const activeSection = useScrollSpy({
    sectionElementRefs : sectionsRefs,
    offsetPx: -80,
  })

  const setNavbg = (section) => {
    console.log(section)
  }

  return (

    <div>
      <NavBar
        style={setNavbg(activeSection)}
      >
        <Nav>
          <NavLink 
              smooth
              to="/#landing" 
              activeClassName={activeSection === 0  ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}
            >
              Home
          </NavLink>
       </Nav>
       <Nav className="ml-auto" id="nav-items">
        <NavLink 
          smooth
          to="/#portfolio" 
          activeClassName={activeSection === 1  ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}
                  
        >
          Portfolio
        </NavLink>
        <NavLink 
          smooth
          to="/#about"
          activeClassName={activeSection === 2  ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"} 
                    >
            About
        </NavLink>
        <NavLink 
          smooth
          to="/#contact" 
          activeClassName={activeSection === 3  ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}
        >
        Contact
        </NavLink>
     </Nav>
    </NavBar>
      <section ref={sectionsRefs[0]}>
        <Landing/>
      </section>
      <section ref={sectionsRefs[1]}>
        <Portfolio/>
      </section>
      <section ref={sectionsRefs[2]}>
        <About/>
      </section>
      <section ref={sectionsRefs[3]}>
        <Contact/>
      </section>
    </div>
      
    );
  }

export default ScrollView;
