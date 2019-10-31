import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
  root: { flexGrow: 1 }, 
  label: {}
});

export default function NavBar(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.label}>
        <Toolbar>
          {props.children}
        </Toolbar>
      </AppBar>
    </div>
  );
}
