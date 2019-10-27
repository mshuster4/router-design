import React from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import "./style.css";


function NavBar(props) {
  
  return (
    <Navbar fixed="top" className="nav-bg">
    <Nav>
       <NavLink 
          smooth
          to="/#landing" 
        >
          Home
        </NavLink>
    </Nav>
     <Nav className="ml-auto" id="nav-items">
      <Scrollspy items={ ['landing','portfolio', 'about', 'contact'] } currentClassName="is-current" className="spy-navs" isScrolledPast={(items) => { console.log(items)}}>
        <NavLink 
          smooth
          to="/" 
          className="d-none nav-link"
        >
          Home
        </NavLink>
        <NavLink 
          smooth
          to="/#portfolio" 
        >
          Portfolio
        </NavLink>
        <NavLink 
          smooth
          to="/#about" 
                    >
            About
        </NavLink>
        <NavLink 
          smooth
          to="/#contact" 
        >
        Contact
        </NavLink>
      </Scrollspy>
     </Nav>
    </Navbar>

    );

}


export default NavBar