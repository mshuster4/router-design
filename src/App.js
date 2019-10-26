import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import NavBar from "./components/NavBar";
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