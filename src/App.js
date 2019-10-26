import React from "react";
import NavBar from "./components/NavBar"
import { HashLink as Link } from 'react-router-hash-link';
import Routes from "./Routes";

function App() {
  return (
  <div>
    <NavBar/>
    <Routes/>
  </div>
  )
}

export default App;