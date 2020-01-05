import React, { FC } from 'react'
import { Fab, Tooltip, Switch } from '@material-ui/core'
import { useStyles } from 'Assets/styles'
import { ThemeColor } from 'type'

interface Props {
  themeColor: ThemeColor
  changeThemeColor: () => void
}

const DarkModeToggler: FC<Props> = props => {
  const styles = useStyles()

  // Switch to Dark or Light theme
  const toggleDarkMode = () => {
    if (localStorage.getItem('themeColor') === 'light')
      localStorage.setItem('themeColor', 'dark')
    else localStorage.setItem('themeColor', 'light')
  }

  return (
    <Fab
      className={styles.darkToggler}
      color="primary"
      onClick={toggleDarkMode}
      aria-label="toggle-dark"
    >
      <Tooltip title="Toggle Dark">
        <Switch
          checked={props.themeColor === 'dark'}
          onChange={props.changeThemeColor}
          value="checkedA"
          id="dark-switch"
        />
      </Tooltip>
    </Fab>
  )
}

export default DarkModeToggler
