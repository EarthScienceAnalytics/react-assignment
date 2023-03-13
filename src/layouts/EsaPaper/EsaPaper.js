import PropTypes from "prop-types";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

// https://maximeblanc.fr/blog/how-to-fix-the-received-true-for-a-non-boolean-attribute-error/

const squaredStyles = { borderRadius: 0 };

const StyledPaper = styled(Paper)(({ theme, squared, outlined }) => {
  return {
    borderRadius: "4px",
    maxWidth: "100%",
    border: 0,
    boxShadow: "0 10px 40px 0 rgba(16, 36, 94, 0.2)",
    ...(squared ? squaredStyles : {}),
    border: outlined ? `1px solid ${theme.palette.border}` : 0
  };
});

export default function EsaPaper({
  className,
  outlined = false,
  squared = false,
  children,
  paperRef,
  ...rest
}) {
  return (
    <StyledPaper
      squared={+squared}
      outlined={+outlined}
      ref={paperRef}
      className={className}
      {...rest}
    >
      {children}
    </StyledPaper>
  );
}

EsaPaper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  outlined: PropTypes.bool,
  squared: PropTypes.bool
};
