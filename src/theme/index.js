import { createTheme } from "@mui/material/styles";

import palette from "./palette";

// read more at https://material-ui.com/customization/themes
const theme = createTheme({
  palette,
  typography: {
    fontSize: 11,
    fontFamily: ["Montserrat", "sans-serif", "Helvetica Neue", "Arial"].join(",")
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  topBar: { height: 48 }
});

export default theme;
