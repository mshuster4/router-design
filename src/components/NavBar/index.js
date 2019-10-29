import React from "react";
import {  Navbar } from 'react-bootstrap';
import "./style.css";




function NavBar(props) {

  return (
    <Navbar fixed="top" className={props.className}>
     {props.children}
    </Navbar>

    );

}


export default NavBar