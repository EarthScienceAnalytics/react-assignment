import PropTypes from "prop-types";
import { Button, CircularProgress } from "@mui/material";

// const AppButton = styled(Button)(({ theme }) => {
//   return {
//     color: theme.palette.default.contrastText,
//     backgroundColor: styledBy("color", {
//       default: theme.palette.default.dark,
//       primary: theme.palette.primary.main,
//       secondary: theme.palette.secondary.main,
//       info: theme.palette.info.main,
//       danger: theme.palette.danger.main,
//       dark: "rgb(55,55,55)"
//     }),
//     "&:hover": {
//       backgroundColor: styledBy("color", {
//         default: theme.palette.default.main,
//         primary: theme.palette.primary.dark,
//         secondary: theme.palette.secondary.dark,
//         info: theme.palette.info.dark,
//         danger: theme.palette.danger.dark,
//         dark: "rgba(55,55,55, .9)"
//       })
//     }
//   };
// });

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
    <Button
      {...rest}
      variant={variant}
      // className={`${className} ${variant === "contained" ? classes.root : ""}`}
    >
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
