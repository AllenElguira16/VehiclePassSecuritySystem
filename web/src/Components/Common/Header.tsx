import React, { FC } from 'react'
import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core'
import logo from 'Reactstrap/Assets/images/LNULogo.webp'
// import { Menu as MenuIcon } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useStyles } from 'styles'

const Header: FC = () => {
  const styles = useStyles()

  // const ButtonLink = <Button color="inherit" component={Link} to="" />;

  return (
    <AppBar color="inherit" position="sticky" className={styles.header}>
      <Container>
        <Toolbar>
          <img src={logo} alt="Logo" className={styles.menuButton} />
          <Typography variant="h6" className={styles.title}>
            Vehicle Pass Security System
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/vehicle-pass">
            Vehicle Pass
          </Button>
          <Button color="inherit" component={Link} to="/about-us">
            About Us
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
