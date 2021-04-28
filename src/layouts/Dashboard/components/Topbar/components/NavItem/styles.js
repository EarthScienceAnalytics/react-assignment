export default theme => ({
  navItem: {
    cursor: 'pointer',
    width: 'auto',
    color: theme.palette.text.secondary,
    fontWeight: 500,
    textTransform: 'inherit',
    '&:hover': {
      backgroundColor: theme.palette.default.light
    }
  },
  activeListItem: {
    backgroundColor: theme.palette.default.light,
    '& $listItemText': {
      color: theme.palette.text.primary
    }
  },
  listItemText: {
    fontWeight: 500,
    color: theme.palette.text.secondary
  }
});
