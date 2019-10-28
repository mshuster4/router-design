import React, { useRef } from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import "./style.css";




function NavBar(props) {

  return (
    <Navbar fixed="top" className={props.className}>
    <Nav>
       <NavLink 
          smooth
          to="/#landing" 
          activeClassName={props.linkClassName}
        >
          Home
        </NavLink>
    </Nav>
     <Nav className="ml-auto" id="nav-items">
        <NavLink 
          smooth
          to="/#portfolio" 
          activeClassName={props.linkClassName}
                  
        >
          Portfolio
        </NavLink>
        <NavLink 
          smooth
          to="/#about"
          activeClassName={props.linkClassName} 
                    >
            About
        </NavLink>
        <NavLink 
          smooth
          to="/#contact" 
          activelassName={props.linkClassName}
        >
        Contact
        </NavLink>
     </Nav>
    </Navbar>

    );

}


export default NavBar