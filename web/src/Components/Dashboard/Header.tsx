import React, { FC } from 'react'
import { AppBar, Typography, Container, Toolbar } from '@material-ui/core'
import logo from 'Reactstrap/Assets/images/LNULogo.webp'
import { useStyles } from 'styles'

const Header: FC = () => {
  const styles = useStyles()

  return (
    <AppBar position="fixed" color="inherit" className={styles.header}>
      <Container>
        <Toolbar>
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
