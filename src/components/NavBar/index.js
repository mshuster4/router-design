import React from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { Nav, Navbar } from 'react-bootstrap';
import "./style.css";

function NavBar(props) {

  console.log(props)

   return (
        <Navbar 
          fixed="top" 
          className={props.navClassName}
        >
            <Nav className="d-none d-sm-inline-flex">
              <Nav.Item
                className={props.itemClassName}
              >
                 <NavLink 
                    smooth
                    className="portfolio nav-link"
                    handlesetactive={props.handleSetActive}
                    to="/#landing" 
                  >
                  <img
                      alt="logo"
                      src={props.src}
                      width="30"
                  />
                 </NavLink>
               </Nav.Item>
             </Nav>
             <Nav className="d-sm-inline-flex ml-sm-auto">
              <Nav.Item
                className={props.itemClassName}
              >
                    <NavLink 
                      smooth
                      className="portfolio nav-link" 
                      handlesetactive={props.handleSetActive}
                      to="/#portfolio" 
                    >
                        Portfolio
                    </NavLink>
                </Nav.Item>
                <Nav.Item
                  className={props.itemClassName}              
                >
                     <NavLink 
                      smooth
                      className="portfolio nav-link"
                      handlesetactive={props.handleSetActive}
                      to="/#about" 
                    >
                      About
                    </NavLink>
                </Nav.Item>
                <Nav.Item
                  className={props.itemClassName}
                >
                  <NavLink 
                    smooth
                    className="portfolio nav-link"
                    handleSetActive={props.handleSetActive}
                    to="/#contact" 
                   >
                    Contact
                   </NavLink>
                </Nav.Item>
              </Nav>
       </Navbar>

    );

}


export default NavBar