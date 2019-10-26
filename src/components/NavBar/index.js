import React from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { Nav, Navbar } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import "./style.css";

function NavBar(props) {
  return (
    <Navbar fixed="top" className="nav-bg">
      <Scrollspy items={ ['landing', 'portfolio', 'about', 'contact'] } currentClassName="is-current">
        <Nav.Item>
          <NavLink 
            smooth
            to="/#landing" 
          >
            Landing
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink 
            smooth
            to="/#portfolio" 
          >
            Portfolio
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink 
            smooth
            to="/#about" 
                      >
              About
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink 
            smooth
            to="/#contact" 
          >
          Contact
          </NavLink>
        </Nav.Item>
      </Scrollspy>
    </Navbar>

    );

}


export default NavBar