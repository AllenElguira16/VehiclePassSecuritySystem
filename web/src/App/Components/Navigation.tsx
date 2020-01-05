import React, { FC, useContext } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { Person, History, ExitToApp, Edit } from '@material-ui/icons'
import { Link, Route } from 'react-router-dom'
import { useStyles } from 'Assets/styles'
import { MainState, AdminState } from 'App/State'
import { observer } from 'mobx-react-lite'

const Navigation: FC = () => {
  const styles = useStyles()
  const { state } = useContext(MainState)
  const adminState = useContext(AdminState)
  const { signOut } = adminState
  const navList = [
    {
      name: 'Users',
      link: '/users',
      icon: <Person />,
    },
    {
      name: 'History',
      link: '/history',
      icon: <History />,
    },
    {
      name: 'Update Admin',
      link: '/edit-credentials',
      icon: <Edit />,
    },
  ]

  return (
    <Route
      path="/"
      render={() =>
        adminState.state.isLoggedIn && (
          <Drawer
            className={state.isNavOpen ? styles.drawerOpen : styles.drawerClose}
            variant="persistent"
            classes={{
              paper: styles.drawerPaper,
            }}
            open={state.isNavOpen}
            anchor="left"
          >
            <div className={styles.toolbar} />
            <List>
              {navList.map((nav, i) => (
                <ListItem button key={i} component={Link} to={nav.link}>
                  <ListItemIcon>{nav.icon}</ListItemIcon>
                  <ListItemText primary={nav.name} />
                </ListItem>
              ))}
            </List>
            <List style={{ marginTop: 'auto' }}>
              <ListItem button onClick={signOut}>
                <ListItemIcon>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Drawer>
        )
      }
    />
  )
}

export default observer(Navigation)
