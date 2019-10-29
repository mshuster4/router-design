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
import projects from "../../projects.json";
import { Col, Row } from "react-bootstrap"
import BlockPreview from "../../assets/images/block-party-preview.png";
import ReadingPreview from "../../assets/images/reading-preview.png";
import FriendPreview from "../../assets/images/friend-preview.png";
import CampPreview from "../../assets/images/camp-preview.png";
import BrewsPreview from "../../assets/images/brews-preview.png";
import MongoPreview from "../../assets/images/mongo-preview.png";

const imageArr = [ BlockPreview, 
                   ReadingPreview, 
                   FriendPreview, 
                   CampPreview, 
                   BrewsPreview, 
                   MongoPreview ]

const PortfolioImage = () => {

  return (
    <Row>
      {projects.map((project, i) => (
        <div key={project.id}>
        <Col xs={12} md={6} lg={4} key={project.id} className="mb-4 mt-4 mb-md-0 mt-md-0">
        <ModalLink to={`/portfolio/${project.id}`}>
         <img className="img-fluid" src={imageArr[i]} alt="preview"/>
          {project.title}
        </ModalLink>
        </Col>
        </div>
      ))}
      </Row>
  );
 }


export default PortfolioImage;