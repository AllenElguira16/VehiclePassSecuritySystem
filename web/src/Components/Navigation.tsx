import React, { FC, useContext, useState, useEffect } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import {
  Person,
  History,
  ExitToApp,
  Edit,
  Brightness3,
} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useStyles } from 'Assets/styles'
import { MainState, AdminState } from 'State'
import { observer } from 'mobx-react-lite'

const Navigation: FC = () => {
  const styles = useStyles()
  const { state } = useContext(MainState)
  const adminState = useContext(AdminState)
  const { signOut } = adminState
  const [selectedIndex, setSelectedIndex] = useState(0)
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
      name: 'Night Mode',
      link: '/night-mode-settings',
      icon: <Brightness3 />,
    },
    {
      name: 'Update Admin',
      link: '/edit-credentials',
      icon: <Edit />,
    },
  ]

  useEffect(() => {
    setSelectedIndex(
      navList.findIndex(list => list.link === window.location.pathname),
    )
  }, [setSelectedIndex, navList])

  return (
    <>
      {adminState.state.isLoggedIn && (
        <Drawer
          className={styles.drawer}
          variant="permanent"
          classes={{
            paper: styles.drawerPaper,
          }}
          open={state.isNavOpen}
          anchor="left"
        >
          <div className={styles.toolbar} />
          <List>
            {navList.map((nav, i) => (
              <ListItem
                button
                key={i}
                component={Link}
                to={nav.link}
                onClick={() => setSelectedIndex(i)}
                selected={selectedIndex === i}
              >
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
      )}
    </>
  )
}

export default observer(Navigation)
