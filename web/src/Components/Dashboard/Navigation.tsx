import React, { FC, useContext } from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Person, Dashboard, History } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useStyles } from 'styles'
import { MainState } from 'Pages/Dashboard/state'
import { observer } from 'mobx-react-lite'

const Navigation: FC = () => {
  const styles = useStyles()
  const { state } = useContext(MainState)
  const navList = [
    {
      name: 'Dashboard',
      link: '/dashboard',
      icon: <Dashboard />,
    },
    {
      name: 'Users',
      link: '/dashboard/users',
      icon: <Person />,
    },
    {
      name: 'History',
      link: '/dashboard/history',
      icon: <History />,
    },
  ]

  return (
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
    </Drawer>
  )
}

export default observer(Navigation)
