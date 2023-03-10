import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  root: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex'
  }
});

const PortletToolbar = props => {
  const { classes, className, children, ...rest } = props;

  return (
    <div {...rest} className={`${classes.root} ${className}`}>
      {children}
    </div>
  );
};

PortletToolbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PortletToolbar);
