import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';
import ExamplePage from './earthnet/ExamplePage';
import Wellbore from './earthnet/Wellbore';
import Histogram from './earthnet/Histogram';

export default function App() {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ExamplePage} />
          <Route path="/wellbore/" exact component={Wellbore} />
          <Route path="/histogram/" exact component={Histogram} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}
