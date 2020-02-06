import React, { FC } from 'react'
import { AppBar, Typography, Container, Toolbar } from '@material-ui/core'
import logo from 'Assets/images/LNULogo.webp'
import { useStyles } from 'Assets/styles'
import DarkModeToggler from './DarkModeToggler'
import { ThemeColor } from 'type'

interface Props {
  themeColor: ThemeColor
  changeTheme: () => void
}

const Header: FC<Props> = ({ themeColor, changeTheme }) => {
  const styles = useStyles()

  return (
    <AppBar className={styles.header} position="fixed" color="inherit">
      <Container>
        <Toolbar>
          <img src={logo} alt="Logo" className={styles.menuButton} />
          <Typography variant="h6" className={styles.title}>
            Vehicle Pass Security System - Dashboard
          </Typography>
          <DarkModeToggler
            themeColor={themeColor}
            changeThemeColor={changeTheme}
          />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
