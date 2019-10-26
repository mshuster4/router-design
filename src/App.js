import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Routes from "./Routes";

function Menu() {
 return(
   <ul>
     <li>
       <Link to="/#landing">Landing</Link>
     </li>
     <li>
      <Link to="/#portfolio">Portfolio</Link>
     </li>
     <li>
       <Link to="/#about">About</Link>
     </li>
      <li>
       <Link to="/#contact">Contact</Link>
     </li>
   </ul>
 );
}

function App() {
  return (
  <div>
    <Menu/>
    <Routes/>
  </div>
  )
}

export default App;