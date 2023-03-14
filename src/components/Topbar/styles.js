import { Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const Container = styled("div")(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.borderShadow}`,
  boxShadow: `0 0 35px 0  ${theme.palette.borderShadow}`,
  backgroundColor: theme.palette.common.commonBackground,
  display: "flex",
  alignItems: "center",
  height: theme.topBar.height,
  zIndex: theme.zIndex.appBar,
  position: "fixed",
  width: "100%",
  top: 0,
  left: 0,
  right: "auto",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })
}));

const BrandWrapper = styled("div")(({ theme }) => ({
  background: theme.palette.default.dark,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "300px",
  height: theme.topBar.height,
  flexShrink: 0
}));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  width: "calc(100% - 160px)",
  maxWidth: "100%",
  margin: "auto",
  fontFamily: "Montserrat,sans-serif",
  fontSize: "22px",
  fontWeight: 700,
  letterSpacing: 3,
  color: theme.palette.common.white,
  textDecoration: "none"
}));

const StyledToolbar = styled(Toolbar)(() => ({
  minHeight: "auto",
  width: "100%",
  paddingLeft: 0
}));

export { StyledToolbar, BrandWrapper, Container, StyledNavLink };
