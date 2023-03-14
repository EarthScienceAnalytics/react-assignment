import PropTypes from "prop-types";
import { FormControl, InputLabel, Select, Input, MenuItem } from "@mui/material";

export default function MultiSelect({
  className,
  label = "",
  id = "",
  value = [],
  onChange,
  options = [],
  shrink,
  ...rest
}) {
  return (
    <FormControl {...rest} className={className} style={{ display: "flex", width: "100%" }}>
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
            .join(", ")
        }
      >
        {options.map((type, index) => (
          <MenuItem key={type.text + "-" + index} value={type.value}>
            {type.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

MultiSelect.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  id: PropTypes.string,
  value: PropTypes.array,
  options: PropTypes.array,
  shrink: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string
};
