import PropTypes from "prop-types";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Icon = styled("span")(({ theme }) => ({
  fontSize: "1.3rem",
  marginRight: theme.spacing(1),
  color: theme.palette.text.secondary,
  alignItems: "center",
  display: "flex"
}));

const Title = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: "1rem"
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  marginLeft: theme.spacing(1),
  color: theme.palette.text.secondary
}));

export default function PortletLabel({ className, icon, title, subtitle }) {
  return (
    <Box className={className} display="flex" alignItems="center">
      {icon && <Icon>{icon}</Icon>}
      {title && <Title variant="h2">{title}</Title>}
      {subtitle && <Subtitle variant="subtitle2">{subtitle}</Subtitle>}
    </Box>
  );
}

PortletLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.node,
  subtitle: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
