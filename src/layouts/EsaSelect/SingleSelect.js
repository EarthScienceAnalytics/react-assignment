import PropTypes from "prop-types";
import { TextField, MenuItem } from "@mui/material";

export default function SingleSelect({
  className,
  label = "",
  value = "",
  onChange,
  options = [],
  error,
  helperText,
  ...rest
}) {
  return (
    <TextField
      {...rest}
      placeholder="Placeholder"
      error={error}
      select
      label={label}
      helperText={helperText}
      className={className}
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{ display: "flex", width: "100%" }}
    >
      {options.map(type => (
        <MenuItem key={type.key} value={type.value}>
          {type.text}
        </MenuItem>
      ))}
    </TextField>
  );
}

SingleSelect.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.array,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};
