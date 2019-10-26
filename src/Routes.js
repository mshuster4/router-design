import React, { Component } from 'react';
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import Landing from "./components/Landing";
import About from "./components/About";
import ProjectModal from "./components/Modal"
import Contact from "./components/Contact";
import { HashLink as Link } from 'react-router-hash-link';
import { ModalSwitch, ModalRoute } from "react-router-modal-gallery";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect,
  withRouter,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";


function ScrollView() {

  return (
    <div>
      <Landing/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

const routes = [
  {
    exact: true,
    path: '/',
    component: ScrollView
  },
  {
    defaultParentPath: '/',
    modal: true,
    path: '/:id',
    component: Project
  },
  {
    path: '*',
    // eslint-disable-next-line
    render: () => <Redirect to="/" />
  }
];

const modalRoutes = routes
  .filter(route => route.modal)
  .map(route => <ModalRoute key={route.path} {...route} />);

const Routes = () => (
  <ModalSwitch
    renderModal={({ open, redirectToBack }) => (
      <ProjectModal open={open} onExited={redirectToBack}>
        {modalRoutes}
      </ProjectModal>
    )}
  >
    {routes.map(route =>
      route.modal ? (
        <ModalRoute key={route.path} {...route} />
      ) : (
        <Route key={route.path} {...route} />
      )
    )}
  </ModalSwitch>
);

export default Routes;






