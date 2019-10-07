import palette from './palette';
// read more at https://material-ui.com/customization/themes
export default {
  palette,
  typography: {
    useNextVariants: true,
    fontSize: 11,
    fontFamily: ['Montserrat', 'sans-serif', 'Helvetica Neue', 'Arial'].join(',')
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  topBar: {
    height: '56px'
  }
};
