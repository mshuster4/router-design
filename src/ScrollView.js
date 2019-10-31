import React, { useRef} from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import NavBar from "./components/NavBar";
import LogoLight from "./assets/images/ms-logo-light.png";
import LogoDark from "./assets/images/ms-logo-dark.png";
import Landing from "./components/Landing";
import Portfolio from "./pages/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import useScrollSpy from 'react-use-scrollspy';
import styled from "styled-components";
import "./App.css";

const NavTabs = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
`;

export default function ScrollView() {

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
        classes={{label: setNavbg(activeSection)}}
      >
        <NavLink 
            smooth
            to="/#landing" 
            activeClassName={activeSection === 0  ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}
          >
            <img id="logo" alt="ms-logo" src={activeSection === 0 ? LogoLight : LogoDark} />
        </NavLink>
       <NavTabs>
        <NavLink 
          pr={2}
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
     </NavTabs>
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
