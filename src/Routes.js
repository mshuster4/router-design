import React from 'react';
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import ProjectModal from "./components/Modal"
import { ModalSwitch, ModalRoute } from "react-router-modal-gallery";
import ScrollView from "./ScrollView";
import {
  Route, 
  Redirect,
} from "react-router-dom";


const routes = [
  {
    exact: true,
    path: '/portfolio',
    component: Portfolio
  },
  {
    defaultParentPath: '/portfolio',
    modal: true,
    path: '/projects/:id',
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
 <div>
  <Route exact path="/" component={ScrollView} />
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
 </div>
);

export default Routes;






