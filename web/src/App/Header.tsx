import React, { FC } from 'react'
import { AppBar, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: '#FFF',
    color: '#000',
  },
}))

const Header: FC = () => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
          <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            Vehicle Pass Security System
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
