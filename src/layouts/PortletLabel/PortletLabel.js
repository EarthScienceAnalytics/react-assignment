import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    fontSize: '1.3rem',
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 500,
    fontSize: '1rem'
  },
  subtitle: {
    fontWeight: 400,
    marginLeft: theme.spacing(1),
    color: theme.palette.text.secondary
  }
});

const PortletLabel = props => {
  const { classes, className, icon, title, subtitle, ...rest } = props;

  return (
    <div {...rest} className={`${classes.root} ${className}`}>
      {icon && <span className={classes.icon}>{icon}</span>}
      {title && (
        <Typography className={classes.title} variant="h2">
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography className={classes.subtitle} variant="subtitle2">
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

PortletLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  icon: PropTypes.node,
  subtitle: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default withStyles(styles)(PortletLabel);
