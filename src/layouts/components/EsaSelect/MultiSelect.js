import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';
import { FormControl, InputLabel, Select, Input, MenuItem } from '@material-ui/core';

// Component styles
const styles = theme => {
  return {
    formControl: {
      display: 'flex',

      width: '100%'
    }
  };
};

const MultiSelect = props => {
  const { classes, className, label, id, value, onChange, options, shrink, ...rest } = props;

  const rootClassName = classNames(classes.formControl, className);

  return (
    <FormControl {...rest} className={rootClassName}>
      <InputLabel htmlFor={id} shrink={shrink}>
        {label}
      </InputLabel>
      <Select
        multiple
        value={value}
        onChange={e => onChange(e.target.value)}
        input={<Input id={id} />}
        renderValue={selected =>
          options
            .filter(type => selected.includes(type.value))
            .map(type => type.text)
            .join(', ')
        }
      >
        {options.map((type, index) => (
          <MenuItem key={type.text + '-' + index} value={type.value}>
            {type.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

MultiSelect.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  id: PropTypes.string,
  value: PropTypes.array,
  options: PropTypes.array,
  shrink: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

MultiSelect.defaultProps = {
  label: '',
  id: '',
  value: [],
  options: []
};

export default withStyles(styles)(MultiSelect);
