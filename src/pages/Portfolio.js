import React from 'react';
import { Container } from "react-bootstrap"
import PortfolioImage from '../components/PortfolioImage';
import BlockPreview from "../assets/images/block-party-preview.png";
import ReadingPreview from "../assets/images/reading-preview.png";
import FriendPreview from "../assets/images/friend-preview.png";
import CampPreview from "../assets/images/camp-preview.png";
import BrewsPreview from "../assets/images/brews-preview.png";
import MongoPreview from "../assets/images/mongo-preview.png";

const imageArr = [ BlockPreview, 
                   ReadingPreview, 
                   FriendPreview, 
                   CampPreview, 
                   BrewsPreview, 
                   MongoPreview ] 

const Portfolio = () => {
  
  return (
  <div id="portfolio">
    <Container>
      <PortfolioImage
         images={imageArr}
      />
    </Container>
  </div>
  );
}

export default Portfolio;