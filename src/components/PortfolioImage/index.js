import React from "react";
import { ModalLink } from "react-router-modal-gallery";
import { Col, Row } from "react-bootstrap"
import { MDBMask, MDBView, MDBBtn, MDBIcon } from "mdbreact";
import BlockPreview from "../../assets/images/block-party-preview.png";
import ReadingPreview from "../../assets/images/reading-preview.png";
import FriendPreview from "../../assets/images/friend-preview.png";
import CampPreview from "../../assets/images/camp-preview.png";
import BrewsPreview from "../../assets/images/brews-preview.png";
import MongoPreview from "../../assets/images/mongo-preview.png";
import projects from "../../projects.json";
import "./style.css";


const PortfolioImage = (props) => {

  return (
    <Row>
      {projects.map((project, i) => (
        <Col key={project.id} xs={12} md={6} lg={4} className="mb-4 mt-4 mb-md-3 mt-md-3">
          <MDBView hover className="z-depth-1-half">
            <img className="img-fluid" src={props.images[i]} alt="preview"/>
              <MDBMask className="flex-center flex-column" overlay="black-strong">
                <h6 className="project-text">{project.title}</h6>
                <ModalLink to={`/portfolio/${project.id}`}>
                  <MDBBtn outline color="success">
                  Learn More <MDBIcon icon="book-open" className="ml-1"/>
                  </MDBBtn>
                </ModalLink>
              </MDBMask>
          </MDBView>
        </Col>
      ))}
    </Row>
  );
 }


export default PortfolioImage;