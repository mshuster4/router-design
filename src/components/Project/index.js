import React from 'react';
import { DialogTitle,  DialogContent, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {
  useParams
} from "react-router-dom";
import BlockOne from "../../assets/images/block-party-shot-one.png";
import BlockTwo from "../../assets/images/block-party-shot-two.png";
import ReadingOne from "../../assets/images/reading-shot-one.png";
import ReadingTwo from "../../assets/images/reading-shot-two.png";
import FriendOne from "../../assets/images/friend-shot-one.png";
import FriendTwo from "../../assets/images/friend-shot-two.png";
import CampOne from "../../assets/images/camp-shot-one.png";
import CampTwo from "../../assets/images/camp-shot-two.png";
import BrewsOne from "../../assets/images/brews-shot-one.png";
import BrewsTwo from "../../assets/images/brews-shot-two.png";
import NewsOne from "../../assets/images/mongo-shot-one.png";
import NewsTwo from "../../assets/images/mongo-shot-two.png";
import projects from "../../projects.json";

const modalImagesArr= [
  {
    id: 0,
    modalImages: [BlockOne, BlockTwo]
  },
  {
    id: 1,
    modalImages: [ReadingOne, ReadingTwo]
  },
  {
    id: 2,
    modalImages: [FriendOne, FriendTwo]
  },
  {
    id: 3,
    modalImages: [CampOne, CampTwo]
  },
  {
    id: 4,
    modalImages: [BrewsOne, BrewsTwo]
  },
  {
    id: 5,
    modalImages: [NewsOne, NewsTwo]
  }
]

const getImagesById = imageId => {
  const allImages = getAllImages();
  return allImages[parseInt(imageId, 6)];
}

const getAllImages = () => {
  let ImageArr = []
  modalImagesArr.forEach(image =>{
    ImageArr.push(image.modalImages);
  })
  console.log(ImageArr)
  return ImageArr
}


const getProjectById = projectId => {
  const allProjects=getAllProjects();
  return allProjects[parseInt(projectId, 6)]
};

const getAllProjects = () => {
  let projectsArr = [];

  projects.forEach(project => {
    projectsArr = [...projects];
  });
  return projectsArr;
};

export default function Project() {

 let { id } = useParams();

 const project = getProjectById(id);

 const images = getImagesById(id)
  
  return (
   <div>
     <DialogTitle className="text-center">
       <Typography variant="h3">{project.title}</Typography>
       <Typography>{project.tagline}</Typography>
     </DialogTitle>
     <DialogContent dividers={true}>
     <Grid container spacing={2}>
       <Grid item sm={6}>
          <img className="img-fluid z-depth-2" src={images[0]} alt="modal-preview-one" />
        </Grid>
        <Grid item sm={6}>
          <img className="img-fluid z-depth-2" src={images[1]} alt="modal-preview-two" />
        </Grid>
      </Grid>
      </DialogContent>
      <DialogContent>
       <Typography variant="body1" gutterBottom>{project.description}</Typography>
       <Typography variant="body1">{project.role}</Typography>
       <Typography variant="h5">Technologies Used</Typography>
       <List dense={true}>
       {project.techsUsed.map(tech => (
         <ListItem>
          <ListItemText>
            {tech}
           </ListItemText>
          </ListItem>
       ))}
        </List>
     </DialogContent>
   </div>
  );
 }
