import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// Component styles
const styles = theme => ({
  root: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    flexGrow: 1,
    overflowY: 'auto'
  },
  noPadding: {
    padding: 0
  }
});

const PortletContent = props => {
  const { classes, className, children, noPadding, maxHeight, contentStyle, ...rest } = props;

  const rootClassName = classNames(
    {
      [classes.root]: true,
      [classes.noPadding]: noPadding
    },
    className
  );

  return (
    <div className={rootClassName} style={{ maxHeight, ...contentStyle }} {...rest}>
      {children}
    </div>
  );
};

PortletContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  maxHeight: PropTypes.number,
  classes: PropTypes.object.isRequired,
  noPadding: PropTypes.bool
};

export default withStyles(styles)(PortletContent);
