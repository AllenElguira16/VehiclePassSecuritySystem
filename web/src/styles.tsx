import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
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
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    marginBottom: 'auto',
  },
  darkToggler: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  pageContainer: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  footer: {
    marginTop: 'auto',
    padding: theme.spacing(4),
  },
  signInContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
}))
