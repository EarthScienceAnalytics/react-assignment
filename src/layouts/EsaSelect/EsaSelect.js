import PropTypes from "prop-types";

import SingleSelect from "./SingleSelect";
import MultiSelect from "./MultiSelect";

const EsaSelect = ({ isMulti = false, ...rest }) => {
  return isMulti ? <MultiSelect {...rest} /> : <SingleSelect {...rest} />;
};

EsaSelect.propTypes = {
  isMulti: PropTypes.bool
};

export default EsaSelect;
