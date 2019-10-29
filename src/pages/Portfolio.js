import React from 'react';
import PortfolioImage from '../components/PortfolioImage';
import PortfolioLink from "../components/PortfolioLink";
import { Container, Row, Col } from "react-bootstrap"

const Portfolio = () => {
  return (
    <Container>
     <PortfolioImage/>
    </Container>
  );
}

export default Portfolio;