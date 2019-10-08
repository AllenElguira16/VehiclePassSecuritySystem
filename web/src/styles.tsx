import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  gridContainer: {
    // alignItems: 'center',
    marginTop: theme.spacing(5),
  },
  card: {
    padding: theme.spacing(3),
    height: '100%',
    // paddingRight: theme.spacing(3),
  },
  darkToggler: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  footer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2, 4),
  },
}))
