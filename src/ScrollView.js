import React, { useRef} from 'react';
import Landing from "./components/Landing";
import Portfolio from "./pages/Portfolio";
import NavBar from "./components/NavBar";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Nav } from 'react-bootstrap';
import LogoLight from "./assets/images/ms-logo-light.png";
import LogoDark from "./assets/images/ms-logo-dark.png";
import About from "./components/About";
import Contact from "./components/Contact";
import useScrollSpy from 'react-use-scrollspy';
import "./App.css"

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
   if (section === 0) {
     return "nav-bg-landing"
   }
   else if (section === 1) {
     return "nav-bg-portfolio"
   }
   else if (section === 2) {
     return "nav-bg-about"
   }
   else {
     return "nav-bg-contact"
   }
}

  return (

    <div>
      <NavBar
        className={setNavbg(activeSection)}
      >
        <Nav>
          <NavLink 
              smooth
              to="/#landing" 
              activeClassName={activeSection === 0  ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}
            >
              <img id="logo" alt="ms-logo" src={activeSection === 0 ? LogoLight : LogoDark} />
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
