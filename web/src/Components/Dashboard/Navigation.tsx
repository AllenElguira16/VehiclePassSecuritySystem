import React, { FC } from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Person, Dashboard, History } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useStyles } from 'styles'

const Navigation: FC = () => {
  const styles = useStyles()
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
      className={styles.drawer}
      variant="permanent"
      classes={{
        paper: styles.drawerPaper,
      }}
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

export default Navigation
