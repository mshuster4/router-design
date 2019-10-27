import React,  { useState } from "react";
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
import NavBar from "../NavBar";
import projects from "../../projects.json"


const Portfolio = () => {

  return (
    <section id="portfolio">
      {projects.map(project => (
        <div key={project.id}>
        <ModalLink to={`/projects/${project.id}`}>
          <p>{project.title}</p>
        </ModalLink>
        </div>
      ))}
      </section>
  );
 }

export default Portfolio