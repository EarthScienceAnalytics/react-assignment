import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.border}`,
    borderBottomLeftRadius: '2px',
    borderBottomRightRadius: '2px'
  },
  noDivider: {
    borderTop: 'none'
  }
});

const PortletFooter = ({ classes, className, noDivider, children, ...rest }) => {
  return (
    <div {...rest} className={`${classes.root} ${noDivider ? classes.noDivider : ''} ${className}`}>
      {children}
    </div>
  );
};

PortletFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  noDivider: PropTypes.bool
};

export default withStyles(styles)(PortletFooter);
