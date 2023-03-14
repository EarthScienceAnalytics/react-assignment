import { Box } from "@mui/material";
import PropTypes from "prop-types";

export default function PortletToolbar({ className, children }) {
  return (
    <Box className={className} display="flex" alignItems="center" justifyContent="flex-end">
      {children}
    </Box>
  );
}

PortletToolbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
