import PropTypes from 'prop-types';
import { withStyles, TextField, MenuItem } from '@material-ui/core';

const styles = {
  formControl: {
    display: 'flex',
    width: '100%'
  }
};

const SingleSelect = ({
  classes,
  className,
  label = '',
  value = '',
  onChange,
  options = [],
  error,
  helperText,
  ...rest
}) => {
  return (
    <TextField
      {...rest}
      placeholder="Placeholder"
      error={error}
      select
      label={label}
      helperText={helperText}
      className={`${classes.formControl} ${className}`}
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

export default withStyles(styles)(SingleSelect);
