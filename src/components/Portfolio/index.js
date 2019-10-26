import React,  { useState } from "react";
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
import NavBar from "../NavBar";
import projects from "../../projects.json"


class Portfolio extends React.Component {

render() {
  return (
    <section id="portfolio">
      {projects.map(i => (
        <ModalLink
          key={i.id}
          to={{
            pathname: `/portfolio:${i.id}`
          }}
        >
          <p>{i.title}</p>
        </ModalLink>
      ))}
      </section>
  );
 }
}

export default Portfolio