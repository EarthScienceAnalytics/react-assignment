import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles, TextField, MenuItem } from '@material-ui/core';

// Component styles
const styles = {
  formControl: {
    display: 'flex',
    width: '100%'
  }
};

const SingleSelect = props => {
  const { classes, className, label, value, onChange, options, error, helperText, ...rest } = props;
  const rootClassName = classnames(classes.formControl, className);
  return (
    <TextField
      {...rest}
      placeholder="Placeholder"
      error={error}
      select
      label={label}
      helperText={helperText}
      className={rootClassName}
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      {options.map(type => (
        <MenuItem key={type.key} value={type.value}>
          {type.text}
        </MenuItem>
      ))}
    </TextField>
  );
};

SingleSelect.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.array,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

SingleSelect.defaultProps = {
  label: '',
  value: '',
  options: []
};

export default withStyles(styles)(SingleSelect);
