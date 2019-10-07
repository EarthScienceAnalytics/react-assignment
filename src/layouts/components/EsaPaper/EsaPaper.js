import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';
import { Paper } from '@material-ui/core';

// Component styles
const styles = theme => {
  return {
    root: {
      borderRadius: '4px',
      maxWidth: '100%',
      border: 0,
      boxShadow: '0 10px 40px 0 rgba(16, 36, 94, 0.2)'
    },
    squared: {
      borderRadius: 0
    },
    outlined: {
      border: `1px solid ${theme.palette.border}`
    }
  };
};

const EsaPaper = props => {
  const { classes, className, outlined, squared, children, paperRef, ...rest } = props;

  const rootClassName = classNames(
    {
      [classes.root]: true,
      [classes.squared]: squared,
      [classes.outlined]: outlined
    },
    className
  );

  return (
    <Paper {...rest} ref={paperRef} className={rootClassName}>
      {children}
    </Paper>
  );
};

EsaPaper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  elevation: PropTypes.number,
  outlined: PropTypes.bool,
  squared: PropTypes.bool
};

EsaPaper.defaultProps = {
  squared: false,
  outlined: false,
  elevation: 0
};

export default withStyles(styles)(EsaPaper);
