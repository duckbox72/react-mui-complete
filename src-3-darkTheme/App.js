import React, { useState } from "react";
import { makeStyles, useTheme,    ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Button, Grid, Paper, Switch, Typography } from "@material-ui/core";


const useStyles = makeStyles(theme => ({/*
  root: {
    height: "100vh",
    background: "linear-gradient(45deg, #FE6888 30%, #FF8553 90%)"
  },
  button: {
    backgroundColor: "blue",
    [theme.breakpoints.up('sm')]: {backgroundColor: "black",}
  }
*/}));

export default function App() {
  // dark/light mode toggler
  const [darkMode, setDarkMode] = useState(false)

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });




  const classes = useStyles();
  //const theme = useTheme();
  console.log(theme.palette.type);

  return (
    <ThemeProvider theme={theme}>
      <Paper 
        style={{ height: "100vh"}}
        elevation={0}
        //square
        className={classes.root}>
        <Grid container direction="column">
          <Typography variant="h2"> 
            This is my App!
          </Typography>
          <Button className={classes.button} color="primary" variant="contained">
            This is a button 
          </Button>
          <Button className={classes.button} color="secondary" variant="contained">
            This is another button 
          </Button>
          
          <Switch color="secondary" checked={darkMode} onChange={() => setDarkMode(!darkMode)}>
          </Switch>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
