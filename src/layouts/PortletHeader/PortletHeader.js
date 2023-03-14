import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme, noDivider, noPadding }) => ({
  alignItems: "center",
  borderBottom: `1px solid ${theme.palette.default.border}`,
  borderTopLeftRadius: "2px",
  borderTopRightRadius: "2px",
  display: "flex",
  height: "40px",
  justifyContent: "space-between",
  padding: theme.spacing(1, 3),
  position: "relative",
  borderBottom: noDivider && "none",
  padding: noPadding && 0
}));

export default function PortletHeader({ className, noDivider, noPadding, children }) {
  return (
    <Container className={className} noPadding={noPadding} noDivider={noDivider}>
      {children}
    </Container>
  );
}

PortletHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  noDivider: PropTypes.bool,
  noPadding: PropTypes.bool
};
