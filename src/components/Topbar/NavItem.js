import PropTypes from "prop-types";
import { ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledListItemButton = styled(ListItemButton)(({ theme, active }) => ({
  cursor: "pointer",
  width: "100%",
  maxWidth: 100,
  color: theme.palette.text.secondary,
  fontWeight: 500,
  textTransform: "inherit",
  "&:hover": {
    backgroundColor: theme.palette.common.light
  },
  backgroundColor: active && theme.palette.common.light,
  "& $listItemText": {
    color: active && theme.palette.text.primary
  }
}));

export default function NavItem({ active, to, title }) {
  return (
    <StyledListItemButton active={active} component="a" href={to}>
      <ListItemText primary={title} />
    </StyledListItemButton>
  );
}

NavItem.propTypes = {
  icon: PropTypes.node,
  to: PropTypes.string,
  title: PropTypes.string
};
