import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function SkillsList(props) {

 const classes = useStyles();

 return (
    <div className={classes.paper}>
            <List dense={true}>
              {generate(
                <ListItem>
                  <ListItemText
                    primary={props.items}
                  />
                </ListItem>
              )}
            </List>
          </div>
 )
}

export default SkillsList