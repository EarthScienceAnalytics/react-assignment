export default theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.borderShadow}`,
    boxShadow: `0 0 35px 0  ${theme.palette.borderShadow}`,
    backgroundColor: theme.palette.common.commonBackground,
    display: 'flex',
    alignItems: 'center',
    height: theme.topBar.height,
    zIndex: theme.zIndex.appBar
  },
  toolbar: {
    minHeight: 'auto',
    width: '100%',
    paddingLeft: 0
  },
  brandWrapper: {
    background: theme.palette.default.dark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '300px',
    height: theme.topBar.height,
    flexShrink: 0
  },
  logo: {
    width: 'calc(100% - 160px)',
    maxWidth: '100%',
    margin: 'auto',
    fontFamily: 'Montserrat,sans-serif',
    fontSize: '22px',
    fontWeight: 700,
    letterSpacing: 3,
    // fill: theme.palette.common.white,
    color: theme.palette.common.white,
    textDecoration: 'none'
  },
  title: {
    marginLeft: theme.spacing(1)
  }
});
