import { makeStyles } from '@material-ui/core/styles';

import Topbar from '../../components/Topbar/Topbar';

import styles from './styles';

const useStyles = makeStyles(styles);

export default function Layout({ title = '', children }) {
  const classes = useStyles();
  return (
    <>
      <Topbar title={title} toolbarClasses={classes.topbar} />
      <main className={classes.content}>{children}</main>
    </>
  );
}
