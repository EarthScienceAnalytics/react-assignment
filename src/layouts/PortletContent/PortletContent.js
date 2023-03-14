import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme, noPadding }) => ({
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  flexGrow: 1,
  overflowY: "auto",
  ...(noPadding ? { padding: 0 } : {})
}));

export default function PortletContent({
  className,
  children,
  noPadding,
  maxHeight,
  contentStyle
}) {
  return (
    <Container className={className} style={{ maxHeight, ...contentStyle }} noPadding={noPadding}>
      {children}
    </Container>
  );
}

PortletContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  maxHeight: PropTypes.number,
  noPadding: PropTypes.bool
};
