import { useState } from "react";
import { Typography, Grid, List, ListItemText } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@mui/material/styles";

import { EsaLogo } from "../../components";
import {
  EsaPaper,
  EsaSelect,
  Portlet,
  PortletLabel,
  PortletContent,
  EsaButton,
  PortletToolbar,
  Layout
} from "../../layouts";
import { arrayOfTwenty, selectOptions } from "./consts";
import { StyledPortletHeader, StyledPortletContent, LogoContainer, StyledListItem } from "./styles";

export default function ExamplePage() {
  const theme = useTheme();

  const [singleValue, setSingleValue] = useState(1);
  const [multiValue, setMultiValue] = useState([]);
  const [selectedOptions, setSelect] = useState([]);

  const handleListItemClick = value => {
    const currentIndex = selectedOptions.indexOf(value);

    const newSelectedOptions = [...selectedOptions];
    if (currentIndex === -1) newSelectedOptions.push(value);
    else newSelectedOptions.splice(currentIndex, 1);

    setSelect(newSelectedOptions);
  };

  const isSelected = value => selectedOptions.includes(value);

  return (
    <Layout>
      <Grid container spacing={1} style={{ height: "100%" }}>
        <Grid item xs={12} md={5} container spacing={2}>
          <Grid item xs={12} container>
            <Grid item xs={12}>
              <Typography variant="body1">* Usage of Paper</Typography>
              <EsaPaper style={{ padding: theme.spacing(3) }}>
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
                <StyledPortletHeader>
                  <PortletLabel title="Title" />
                </StyledPortletHeader>
                <PortletContent>
                  Portlet Content:
                  <EsaButton fullWidth style={{ marginTop: theme.spacing(3) }}>
                    Click me
                  </EsaButton>
                </PortletContent>
              </Portlet>
            </Grid>
            <Grid item xs={7}>
              <Portlet>
                <StyledPortletHeader>
                  <PortletLabel title="Title" />
                  <PortletToolbar>
                    <MoreVertIcon />
                  </PortletToolbar>
                </StyledPortletHeader>
                <StyledPortletContent noPadding>
                  <List>
                    {arrayOfTwenty.map(option => (
                      <StyledListItem
                        key={option}
                        selected={isSelected(option)}
                        onClick={() => handleListItemClick(option)}
                      >
                        <ListItemText primary={`item-${option}`} />
                      </StyledListItem>
                    ))}
                  </List>
                </StyledPortletContent>
              </Portlet>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          <LogoContainer>
            <EsaLogo />
          </LogoContainer>
        </Grid>
      </Grid>
    </Layout>
  );
}
