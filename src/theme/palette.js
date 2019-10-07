import { red, blue, yellow, green } from '@material-ui/core/colors';
const white = '#fff';
const black = '#000';

export default {
  common: {
    black,
    white,
    commonBackground: white,
    contrastText: black
  },
  default: {
    light: 'rgba(41, 150, 243, .1)',
    main: 'rgba(0, 40, 73, .9)',
    dark: 'rgb(0, 40, 73)',
    logoBg: 'rgb(51, 51, 51)',
    border: 'rgba(0, 40, 73, .1)',
    contrastText: white
  },
  success: {
    light: green[300],
    main: green[500],
    dark: green[700],
    contrastText: white
  },
  info: {
    light: blue[300],
    main: blue[500],
    dark: blue[700],
    contrastText: white
  },
  warning: {
    light: yellow[300],
    main: yellow[500],
    dark: yellow[700],
    contrastText: white
  },
  danger: {
    light: red[300],
    main: red[500],
    dark: red[700],
    contrastText: white
  }
};
