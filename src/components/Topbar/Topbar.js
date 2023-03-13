import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import NavItem from "./NavItem";
import { AppToolbar, StyledNavLink, Container, BrandWrapper } from "./styles";

export default function Topbar({ children, title = "" }) {
  const theme = useTheme();
  return (
    <Container>
      <AppToolbar>
        <BrandWrapper>
          <StyledNavLink to="/">
            EARTH<span style={{ fontWeight: 200 }}>NET</span>
          </StyledNavLink>
        </BrandWrapper>
        <Typography variant="h6" color="inherit" style={{ marginLeft: theme.spacing(1) }}>
          {title}
        </Typography>
        <NavItem to="/wellbore" title="Wellbore" />
        <NavItem to="/histogram" title="Histogram" />
      </AppToolbar>
      {children}
    </Container>
  );
}

Topbar.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};
