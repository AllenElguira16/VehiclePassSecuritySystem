import { makeStyles } from '@material-ui/core'
import { green, amber } from '@material-ui/core/colors'

export const useStyles = makeStyles(theme => ({
  // root: {
  //   flexGrow: 1,
  // },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  header: {
    zIndex: theme.zIndex.drawer + 1,
  },
  footer: {
    marginTop: 'auto',
    padding: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
  // gridContainer: {
  //   marginTop: theme.spacing(5),
  // },
  // cardGrid: {
  //   width: '100%',
  // },
  // card: {
  //   padding: theme.spacing(3),
  //   height: '100%',
  //   display: 'flex',
  //   flexDirection: 'column',
  // },
  // cardContent: {
  //   marginBottom: 'auto',
  // },
  darkToggler: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  // pageContainer: {
  //   marginTop: theme.spacing(5),
  //   marginBottom: theme.spacing(5),
  // },
  signInContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  // active: {
  //   background: theme.palette.primary.dark,
  // },
  drawer: {
    width: theme.spacing(6) * 4,
    flexShrink: 0,
  },
  drawerPaper: {
    width: theme.spacing(6) * 4,
  },
  toolbar: theme.mixins.toolbar,
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  marginTopMedium: {
    marginTop: theme.spacing(1.6),
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  // info: {
  //   backgroundColor: theme.palette.primary.main,
  // },
  // warning: {
  //   backgroundColor: amber[700],
  // },
}))
