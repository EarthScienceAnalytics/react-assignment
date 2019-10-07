import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles, Button, CircularProgress } from '@material-ui/core';

// Like https://github.com/brunobertolini/styled-by
const styledBy = (property, mapping) => props => mapping[props[property]];

// Component styles
const EsaButton = withStyles(theme => ({
  root: {
    color: theme.palette.default.contrastText,
    backgroundColor: styledBy('color', {
      default: theme.palette.default.dark,
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      info: theme.palette.info.main,
      danger: theme.palette.danger.main,
      dark: 'rgb(55,55,55)'
    }),
    '&:hover': {
      backgroundColor: styledBy('color', {
        default: theme.palette.default.main,
        primary: theme.palette.primary.dark,
        secondary: theme.palette.secondary.dark,
        info: theme.palette.info.dark,
        danger: theme.palette.danger.dark,
        dark: 'rgba(55,55,55, .9)'
      })
    }
  }
}))(({ classes, className, children, loading, color, variant, ...rest }) => (
  <Button
    {...rest}
    variant={variant}
    className={classnames(className, { [classes.root]: variant === 'contained' })}
  >
    {loading ? <CircularProgress size={24} color="inherit" /> : children}
  </Button>
));

EsaButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object,
  loading: PropTypes.bool,
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'info', 'danger', 'dark']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained'])
};

EsaButton.defaultProps = {
  loading: false,
  color: 'default',
  variant: 'contained'
};

export default EsaButton;
