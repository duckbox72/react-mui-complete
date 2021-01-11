import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';


import mytheme from './mytheme';

const rootElement = document.getElementById('root')


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mytheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);


