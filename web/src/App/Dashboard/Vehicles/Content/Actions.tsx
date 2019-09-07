import React, { FC, useContext } from 'react'
import { UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { AppStore } from 'Store'
import { Vehicle } from 'types'
import { observer } from 'mobx-react-lite'
import { Icon } from '@Components'

interface Props {
  vehicle: Vehicle
}

const Action: FC<Props> = observer(({ vehicle }) => {
  const { QRModalOpen, openVehicleForm } = useContext(AppStore)
  const onDelete = () => {
    openVehicleForm('delete', `Delete ${vehicle.name}`, vehicle)
  }
  return (
    <UncontrolledDropdown tag="td">
      <DropdownToggle color="primary" className="d-flex align-middle">
        <Icon name="settings" />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => QRModalOpen(vehicle.id)}>QRCode</DropdownItem>
        <DropdownItem onClick={() => QRModalOpen(vehicle.id)}>Edit</DropdownItem>
        <DropdownItem onClick={onDelete}>Delete</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
})

export default Action
