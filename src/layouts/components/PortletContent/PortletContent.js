import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    flexGrow: 1,
    overflowY: 'auto'
  },
  noPadding: {
    padding: 0
  }
});

const PortletContent = ({
  classes,
  className,
  children,
  noPadding,
  maxHeight,
  contentStyle,
  ...rest
}) => {
  return (
    <div
      className={`${classes.root} ${noPadding ? classes.noPadding : ''} ${className}`}
      style={{ maxHeight, ...contentStyle }}
      {...rest}
    >
      {children}
    </div>
  );
};

PortletContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  maxHeight: PropTypes.number,
  classes: PropTypes.object.isRequired,
  noPadding: PropTypes.bool
};

export default withStyles(styles)(PortletContent);
