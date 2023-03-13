import PropTypes from 'prop-types';
import { makeStyles, ListItem, ListItemText } from '@material-ui/core';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function NavItem({ active, to, title }) {
  const classes = useStyles();

  const className = `${classes.navItem} ${active ? classes.activeListItem : ''}`;

  return (
    <ListItem button className={className} component="a" href={to}>
      <ListItemText classes={{ primary: classes.listItemText }} primary={title} />
    </ListItem>
  );
}

NavItem.propTypes = {
  icon: PropTypes.node,
  to: PropTypes.string,
  title: PropTypes.string
};
