import PropTypes from "prop-types";
import { Button, CircularProgress } from "@mui/material";

export default function EsaButton({
  classes,
  className,
  children,
  loading = false,
  color = "default",
  variant = "contained",
  ...rest
}) {
  return (
    <Button {...rest} variant={variant}>
      {loading ? <CircularProgress size={24} color="inherit" /> : children}
    </Button>
  );
}

EsaButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object,
  loading: PropTypes.bool,
  color: PropTypes.oneOf(["default", "primary", "secondary", "info", "danger", "dark"]),
  variant: PropTypes.oneOf(["text", "outlined", "contained"])
};
