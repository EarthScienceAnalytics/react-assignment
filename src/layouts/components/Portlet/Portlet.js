import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import EsaPaper from '../EsaPaper/EsaPaper';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const Portlet = ({ classes, className, children, ...rest }) => {
  return (
    <EsaPaper {...rest} className={`${classes.root} ${className}`}>
      {children}
    </EsaPaper>
  );
};

Portlet.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portlet);
