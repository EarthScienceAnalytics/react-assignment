import { styled } from "@mui/material/styles";

import { Topbar } from "../../components";

const Content = styled("main")(({ theme }) => ({
  height: "100vh",
  padding: theme.spacing(3),
  paddingTop: theme.spacing(9),
  backgroundColor: theme.palette.background.default,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })
}));

export default function Layout({ title = "", children }) {
  return (
    <>
      <Topbar title={title} />
      <Content>{children}</Content>
    </>
  );
}
