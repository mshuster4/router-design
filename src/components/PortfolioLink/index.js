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
import { ModalLink } from "react-router-modal-gallery";
import projects from "../../projects.json"
import PortfolioImage from "../PortfolioImage";



const PortfolioLink = () => {

  return (
    <div>
      {projects.map(project => (
        <div key={project.id}>
        <ModalLink to={`/portfolio/${project.id}`}>
          {project.title}
        </ModalLink>
        </div>
      ))}
      </div>
  );
 }

export default PortfolioLink; 