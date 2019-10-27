import React from 'react';
import projects from "../../projects.json";
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import {
  useParams
} from "react-router-dom";

const getProjectById = projectId => {
  const allProjects = getAllProjects();
  const project = allProjects.find(project => project.id === projectId);
  console.log(project)
  return(project);
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

 let projectId = projects[parseInt(id, 10)];

 const project = getProjectById(projectId);

  console.log(project);
  
  return (
   <div>
     <p>{project}</p>
   </div>
  );
 }

export default Project;