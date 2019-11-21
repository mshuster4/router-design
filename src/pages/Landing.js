import React from 'react';
import Container from '@material-ui/core/Container';
import { MDBBtn } from "mdbreact";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import BgImage from "../components/BgImage";

const Landing = () => {

  return (
    <div id="landing">
      <Container>
        <BgImage>
        <div id="heading-text">
          <h1 className="h1-responsive">My name is <span className="accent-color">Marguerite Shuster</span>.</h1>
          <h1 className="h1-responsive">I am a <span className="accent-color">Web Developer</span> and <span className="accent-color"> UI Designer</span>.</h1>
        </div>
         <NavLink
            to="#portfolio" spy={true} 
            smooth={true}
            offset={-30}
            duraton={500}
         >
            <MDBBtn className="nav-button" outline={true}>
                View My Creations
            </MDBBtn>
         </NavLink>
        </BgImage>
     </Container>
    </div>
  )
}

export default Landing 