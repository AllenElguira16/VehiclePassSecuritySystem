import React, { FC } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import logo from 'Reactstrap/Assets/images/LNULogo.webp'
// import { Menu as MenuIcon } from '@material-ui/icons'
import { useStyles } from 'styles'

const Header: FC = () => {
  const styles = useStyles()

  return (
    <AppBar style={{ background: '#FFF', color: '#000' }}>
      <Toolbar>
        <img src={logo} alt="Logo" className={styles.menuButton} />
        <Typography variant="h6" className={styles.title}>
          Vehicle Pass Security System
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Dashboard</Button>
        <Button color="inherit">Vehicle Pass</Button>
        <Button color="inherit">About Us</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
