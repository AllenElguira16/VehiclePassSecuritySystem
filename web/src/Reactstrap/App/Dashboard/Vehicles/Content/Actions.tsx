import React, { FC, useContext } from 'react'
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { AppStore } from 'Reactstrap/Store'
import { Vehicle } from 'types'
import { observer } from 'mobx-react-lite'
import { Icon } from 'Reactstrap/@Components'

interface Props {
  vehicle: Vehicle
}

const Action: FC<Props> = observer(({ vehicle }) => {
  const { openVehicleForm } = useContext(AppStore)
  const openDeleteForm = () => {
    openVehicleForm('delete', `Delete ${vehicle.name}`, vehicle)
  }
  const openEditForm = () => {
    openVehicleForm('update', `Update ${vehicle.name}`, vehicle)
  }
  return (
    <UncontrolledDropdown tag="td">
      <DropdownToggle color="primary" className="d-flex align-middle">
        <Icon name="settings" />
      </DropdownToggle>
      <DropdownMenu>
        {/* <DropdownItem onClick={() => QRModalOpen(vehicle.id)}>QRCode</DropdownItem> */}
        <DropdownItem onClick={openEditForm}>Edit</DropdownItem>
        <DropdownItem onClick={openDeleteForm}>Delete</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
})

export default Action
