import React from "react";
import { ModalLink } from "react-router-modal-gallery";
import { MDBMask, MDBView, MDBBtn, MDBIcon } from "mdbreact";
import Grid from '@material-ui/core/Grid';
import projects from "../../projects.json";
import "./style.css";


const PortfolioImage = (props) => {

  return (
    <Grid container spacing={2}>
      {projects.map((project, i) => (
        <Grid item xs={12} md={6} lg={4} className="mb-4 mt-4 mb-md-3 mt-md-3">
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
        </Grid>
      ))}
    </Grid>
  );
 }


export default PortfolioImage;