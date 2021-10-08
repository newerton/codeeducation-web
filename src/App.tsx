/* eslint-disable no-use-before-define */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MuiThemeProvider, CssBaseline, Container } from '@material-ui/core';

import AppRouter from './routes/AppRouter';
import theme from './theme';

const App: React.FunctionComponent = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Container>
          <AppRouter />
        </Container>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
