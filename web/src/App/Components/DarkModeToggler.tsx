import React, { FC, useContext } from 'react'
import { Tooltip, IconButton } from '@material-ui/core'
import { Brightness3, Brightness5 } from '@material-ui/icons'
import { ThemeColor } from 'type'
import NightModeState from 'App/State/NightModeState'
import { observer } from 'mobx-react-lite'

interface Props {
  themeColor: ThemeColor
  changeThemeColor: () => void
}

const DarkModeToggler: FC<Props> = props => {
  const { isEnabled } = useContext(NightModeState)
  // Switch to Dark or Light theme
  const toggleDarkMode = () => {
    if (localStorage.getItem('themeColor') === 'light')
      localStorage.setItem('themeColor', 'dark')
    else localStorage.setItem('themeColor', 'light')

    props.changeThemeColor()
  }

  return (
    <IconButton
      onClick={toggleDarkMode}
      aria-label="toggle-dark"
      disabled={isEnabled}
    >
      <Tooltip title="Toggle Night Mode">
        {props.themeColor === 'dark' ? <Brightness5 /> : <Brightness3 />}
      </Tooltip>
    </IconButton>
  )
}

export default observer(DarkModeToggler)
