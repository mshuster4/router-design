import React from 'react';
import projects from "../../projects.json";
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import {
  useParams
} from "react-router-dom";

const getProjectById = projectId => {
  const allProjects=getAllProjects();
  console.log("here", allProjects);
  return allProjects[parseInt(projectId, 6)]
};

const getAllProjects = () => {
  let projectsArr = [];

  projects.forEach(project => {
    projectsArr = [...projects];
  });
  console.log(projectsArr);
  return projectsArr;
};

const Project = () => {

 let { id } = useParams();

 console.log(id);

 const project = getProjectById(id);

  console.log(project);
  
  return (
   <div>
     <p>{project.title}</p>
   </div>
  );
 }

export default Project;