import PropTypes from "prop-types";
import EsaPaper from "../EsaPaper/EsaPaper";

export default function Portlet({ classes, className, children, ...rest }) {
  return (
    <EsaPaper className={className} style={{ display: "flex", flexDirection: "column" }} {...rest}>
      {children}
    </EsaPaper>
  );
}

Portlet.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
