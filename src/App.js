import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import ExamplePage from './earthnet/ExamplePage';
import Wellbore from './earthnet/Wellbore';
import Histogram from './earthnet/Histogram';

function App() {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <Switch>
        <Route path="/" exact component={ExamplePage} />
        <Route path="/wellbore/" exact component={Wellbore} />
        <Route path="/histogram/" exact component={Histogram} />
      </Switch>
    </MuiThemeProvider>
  );
}

const mapStateToProps = state => ({ state });
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
