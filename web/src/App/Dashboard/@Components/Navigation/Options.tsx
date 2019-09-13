import React, { FC, useContext } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
// import Axios from "axios";
import { observer } from 'mobx-react-lite'
import { AppStore } from 'Store'
import Axios from 'axios'

interface Props {
  // setAsLoggedInState(): void;
}

const Options: FC<Props> = observer(() => {
  const { DashboardState, AccountSettingsState } = useContext(AppStore)
  const signOut = async () => {
    DashboardState.isLoading = true
    const { data } = await Axios.post('/admin/logout')
    if (data.success) DashboardState.isLoggedIn = false
    DashboardState.isLoading = false
  }

  const openAccountSettings = () => {
    AccountSettingsState.isOpen = true
  }

  return (
    <UncontrolledDropdown nav tabIndex={-1} className="ml-auto">
      <DropdownToggle nav caret tabIndex={-1} className="vertical-centered">
        <i className="material-icons pr-2">settings</i>
        <span>Settings</span>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Options</DropdownItem>
        <DropdownItem onClick={openAccountSettings}>Change Account</DropdownItem>
        <DropdownItem onClick={signOut}>Sign Out</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
})

export default Options
