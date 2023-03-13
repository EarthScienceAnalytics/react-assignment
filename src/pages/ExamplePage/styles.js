import { ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

import { PortletContent, PortletHeader } from "../../layouts";

const LogoContainer = styled("div")(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  placeContent: "center",
  alignItems: "center",
  "& svg": {
    width: "30%"
  }
}));

const Header = styled(PortletHeader)(({ theme }) => ({
  padding: theme.spacing(0, 1, 0, 2),
  background: theme.palette.default.dark,
  color: theme.palette.default.contrastText
}));

const Content = styled(PortletContent)(() => ({
  height: 0,
  minHeight: 400,
  display: "flex",
  flexDirection: "column"
}));

const MyListItem = styled(ListItem)(({ theme }) => ({
  cursor: "pointer",
  justifyContent: " space-between",
  "&.Mui-selected.haveData,&.Mui-selected.haveData:hover": {
    backgroundColor: "rgba(41, 150, 243, .3)"
  },
  "&:hover, &.Mui-selected,&.Mui-selected:hover": {
    backgroundColor: theme.palette.default.light
  },
  "&::selection": { backgroundColor: "transparent" }
}));

export { MyListItem, Content, LogoContainer, Header };
