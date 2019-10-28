import React, { useRef } from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import "./style.css";




function NavBar(props) {

  return (
    <Navbar fixed="top" className={props.className}>
     {props.children}
    </Navbar>

    );

}


export default NavBar