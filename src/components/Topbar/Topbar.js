import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Typography } from '@material-ui/core';

import EsaTopNavItem from './NavItem/NavItem';
import styles from './styles';

const useStyles = makeStyles(styles);

export default function Topbar({ title = '', toolbarClasses, children }) {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${toolbarClasses}`}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.brandWrapper}>
          <NavLink to="/" className={classes.logo}>
            EARTH<span style={{ fontWeight: 200 }}>NET</span>
          </NavLink>
        </div>
        <Typography variant="h6" color="inherit" className={classes.title}>
          {title}
        </Typography>
        <EsaTopNavItem to="/wellbore" title="Wellbore" />
        <EsaTopNavItem to="/histogram" title="Histogram" />
      </Toolbar>
      {children}
    </div>
  );
}

Topbar.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  toolbarClasses: PropTypes.string
};
