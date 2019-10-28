import React,  { useState, useRef } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import "./style.css";
import { ModalLink } from "react-router-modal-gallery";
import projects from "../../projects.json"


const Portfolio = () => {

  return (
    <div id="portfolio">
      {projects.map(project => (
        <div key={project.id}>
        <ModalLink to={`/portfolio/${project.id}`}>
          <p>{project.title}</p>
        </ModalLink>
        </div>
      ))}
      </div>
  );
 }

export default Portfolio