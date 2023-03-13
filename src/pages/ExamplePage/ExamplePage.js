import { useState } from 'react';
import { Typography, makeStyles, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { EsaLogo } from '../../components';
import {
  EsaPaper,
  EsaSelect,
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  EsaButton,
  PortletToolbar,
  Layout
} from '../../layouts';
import { arrayOfTwenty, selectOptions } from './consts';
import styles from './styles';

const useStyles = makeStyles(styles);

export default function ExamplePage() {
  const classes = useStyles();
  const [singleValue, setSingleValue] = useState(1);
  const [multiValue, setMultiValue] = useState([]);
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
    <Layout>
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
                      options={selectOptions}
                      onChange={setSingleValue}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <EsaSelect
                      isMulti
                      label="multi select"
                      value={multiValue}
                      options={selectOptions}
                      onChange={setMultiValue}
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
                    {arrayOfTwenty.map(option => (
                      <ListItem
                        key={option}
                        className={classes.listItem}
                        selected={isSelected(option)}
                        onClick={() => handleSelect(option)}
                      >
                        <ListItemText primary={`item-${option}`} />
                      </ListItem>
                    ))}
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
    </Layout>
  );
}
