import { makeStyles } from '@material-ui/core'

const drawerWidth = 200

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  mainContainer: {
    display: 'flex',
    // flexDirection: 'column',
    // minHeight: '100vh',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  header: {
    // marginBottom: theme.spacing(4),
    zIndex: theme.zIndex.drawer + 1,
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
  active: {
    background: theme.palette.primary.dark,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  dashboardContent: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}))
