import React from "react";
import NavBar from "./components/NavBar"
import ScrollView from "./ScrollView";
import { HashLink as Link } from 'react-router-hash-link';
import Routes from "./Routes";

function App() {
  return (
  <div>
    <Routes/>
  </div>
  )
}

export default App;