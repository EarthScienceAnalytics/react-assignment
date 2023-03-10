import { useState } from 'react';
import Dashboard from '../layouts/Dashboard/Dashboard';
import { Typography, makeStyles, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import EsaLogo from '../EsaLogo';
import EsaPaper from '../layouts/components/EsaPaper/EsaPaper';
import EsaSelect from '../layouts/components/EsaSelect/EsaSelect';
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  EsaButton,
  PortletToolbar
} from '../layouts/components';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  fullHeight: { height: '100%' },
  paper: {
    padding: theme.spacing(3)
  },
  button: { marginTop: theme.spacing(3) },
  logoContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      width: '30%'
    }
  },
  header: {
    padding: theme.spacing(0, 1, 0, 2),
    background: theme.palette.default.dark,
    color: theme.palette.default.contrastText
  },
  headerLabel: {
    '& .MuiTypography-root': {
      fontSize: '12px',
      fontWeight: 800
    }
  },
  portletContent: {
    height: 0,
    minHeight: 400,
    display: 'flex',
    flexDirection: 'column'
  },
  listItem: {
    cursor: 'pointer',
    justifyContent: ' space-between',
    '&.Mui-selected.haveData,&.Mui-selected.haveData:hover': {
      backgroundColor: 'rgba(41, 150, 243, .3)'
    },
    '&:hover, &.Mui-selected,&.Mui-selected:hover': {
      backgroundColor: theme.palette.default.light
    },
    '&::selection': { backgroundColor: 'transparent' }
  }
});
const useStyles = makeStyles(styles);

export default function ExamplePage() {
  const classes = useStyles();
  const [singleValue, onChangeSingle] = useState(1);
  const [multiValue, onChangeMulti] = useState([]);
  const [selectedOptions, setSelect] = useState([]);

  const handleSelect = value => {
    const currentIndex = selectedOptions.indexOf(value);
    const newSelectedOptions = [...selectedOptions];
    if (currentIndex === -1) {
      newSelectedOptions.push(value);
    } else {
      newSelectedOptions.splice(currentIndex, 1);
    }
    setSelect(newSelectedOptions);
  };

  const isSelected = value => selectedOptions.includes(value);

  return (
    <Dashboard>
      <Grid container spacing={1} className={classes.fullHeight}>
        <Grid item xs={12} md={5} container spacing={2}>
          <Grid item xs={12} container>
            <Grid item xs={12}>
              <Typography variant="body1">* Usage of Paper</Typography>
              <EsaPaper className={classes.paper}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <EsaSelect
                      label="single select"
                      value={singleValue}
                      options={[
                        { key: 'one', value: 1, text: 'one' },
                        { key: 'two', value: 2, text: 'two' }
                      ]}
                      onChange={value => onChangeSingle(value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <EsaSelect
                      isMulti
                      label="single select"
                      value={multiValue}
                      options={[
                        { key: 'one', value: 1, text: 'one' },
                        { key: 'two', value: 2, text: 'two' }
                      ]}
                      onChange={value => onChangeMulti(value)}
                    />
                  </Grid>
                </Grid>
              </EsaPaper>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">* Usage of Portlet</Typography>
            </Grid>
            <Grid item xs={5}>
              <Portlet>
                <PortletHeader>
                  <PortletLabel title="Title" />
                </PortletHeader>
                <PortletContent>
                  Portlet Content:
                  <EsaButton fullWidth className={classes.button}>
                    Click me
                  </EsaButton>
                </PortletContent>
              </Portlet>
            </Grid>
            <Grid item xs={7}>
              <Portlet>
                <PortletHeader className={classes.header}>
                  <PortletLabel title="Title" />
                  <PortletToolbar>
                    <MoreVertIcon />
                  </PortletToolbar>
                </PortletHeader>
                <PortletContent className={classes.portletContent} noPadding>
                  <List>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
                      option => (
                        <ListItem
                          key={option}
                          className={classes.listItem}
                          selected={isSelected(option)}
                          onClick={() => handleSelect(option)}
                        >
                          <ListItemText primary={`item-${option}`} />
                        </ListItem>
                      )
                    )}
                  </List>
                </PortletContent>
              </Portlet>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          <div className={classes.logoContainer}>
            <EsaLogo />
          </div>
        </Grid>
      </Grid>
    </Dashboard>
  );
}
