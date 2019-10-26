import React from 'react';
import projects from "../../projects.json";
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal'


function Project() {
  return (
    projects.map((project) =>
      <Modal.Header closeButton>{project.title}</Modal.Header>
  ));
}

export default Project;