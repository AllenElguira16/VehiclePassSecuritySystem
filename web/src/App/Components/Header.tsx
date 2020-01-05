import React, { FC, useContext } from 'react'
import {
  AppBar,
  Typography,
  Container,
  Toolbar,
  IconButton,
} from '@material-ui/core'
import logo from 'Assets/images/LNULogo.webp'
import { useStyles } from 'Assets/styles'
import { Menu } from '@material-ui/icons'
import { MainState } from 'App/State'

const Header: FC = () => {
  const { toggleNav } = useContext(MainState)
  const styles = useStyles()

  return (
    <AppBar position="fixed" color="inherit" className={styles.header}>
      <Container>
        <Toolbar>
          <IconButton onClick={toggleNav} edge="start">
            <Menu />
          </IconButton>
          <img src={logo} alt="Logo" className={styles.menuButton} />
          <Typography variant="h6" className={styles.title}>
            Vehicle Pass Security System - Dashboard
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
