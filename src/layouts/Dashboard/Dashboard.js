import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Topbar from './components/Topbar/Topbar';

// Component styles
import styles from './styles';
const useStyles = makeStyles(styles);
const Dashboard = ({ title = '', children }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Topbar title={title} ToolbarClasses={classes.topbar} />
      <main className={classes.content}>{children}</main>
    </Fragment>
  );
};

export default Dashboard;
