import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Paper, Typography } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    background: "linear-gradient(45deg, #FE6888 30%, #FF8553 90%)"
  },
  button: {
    backgroundColor: "blue",
    [theme.breakpoints.up('sm')]: {backgroundColor: "black",}
  }
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);

  return (
    <Paper className={classes.root}>
      <Button className={classes.button} color="primary" variant="contained">
        This is a button 
      </Button>
  
      <Typography variant="h1"> 
        This is my typography
      </Typography>
    </Paper>
  );
}
