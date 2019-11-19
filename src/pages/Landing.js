import React from 'react';
import Container from '@material-ui/core/Container';
import { MDBBtn } from "mdbreact";
import BgImage from "../components/BgImage";

function Landing() {

  return (
    <div id="landing">
      <Container>
        <BgImage>
        <div id="heading-text">
          <h1 className="h1-responsive">My name is <span className="accent-color">Marguerite Shuster</span>.</h1>
          <h1 className="h1-responsive">I am a <span className="accent-color">Web Developer</span> and <span className="accent-color"> UI Designer</span>.</h1>
        </div>
        </BgImage>
     </Container>
    </div>
  )
}

export default Landing 