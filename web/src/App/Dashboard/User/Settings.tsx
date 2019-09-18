import React, { FC, useContext } from 'react'
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { SettingsProps } from 'types'
import { observer } from 'mobx-react-lite'
import { AppStore } from 'Store'

/**
 * ContentSettings
 *
 * used for managing users such as deleting or updating
 */
const Settings: FC<SettingsProps> = observer(props => {
  // Initialize AppStore
  const { openUserForm, QRModalOpen } = useContext(AppStore)
  // func that handles the deletion of user
  const onDelete = async () => {
    openUserForm('delete', 'Delete User', props.user)
  }
  // func that handles the updates of user
  const onEdit = async () => {
    openUserForm('update', 'Update User', props.user)
  }
  // Render Func
  return (
    <>
      <UncontrolledDropdown tag="td">
        <DropdownToggle color="primary" className="d-flex">
          <i className="material-icons">settings</i>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => QRModalOpen(props.user.id)}>Print</DropdownItem>
          <DropdownItem onClick={onEdit}>Edit</DropdownItem>
          <DropdownItem onClick={onDelete}>Delete</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  )
})

export default Settings
