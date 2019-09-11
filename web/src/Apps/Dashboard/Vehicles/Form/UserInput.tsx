import React, { FC, FormEvent, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { AppStore } from 'Store'
import { Input } from '@Components'
import { Row, Col } from 'reactstrap'

interface Props {
  onInputChange(e: FormEvent<HTMLInputElement>): void
}

const UserInput: FC<Props> = observer(({ onInputChange }) => {
  const { VehiclesFormComponentState } = useContext(AppStore)
  const { vehicles } = VehiclesFormComponentState
  const vehicleTypes = ['Motorcycle', 'Car', 'Bus', 'Bicycle']
  const vehicleColors = ['Blue', 'Red', 'Green', 'Yellow', 'White']
  return (
    <>
      <Input type="text" placeholder="Name" name="name" onChange={onInputChange} value={vehicles.name} />
      <Row form>
        <Col>
          <Input type="select" name="type" onChange={onInputChange} value={vehicles.type}>
            <option value="" disabled hidden>
              Type
            </option>
            {vehicleTypes.map((vehicleType, i) => (
              <option value={vehicleType} key={i}>
                {vehicleType}
              </option>
            ))}
          </Input>
        </Col>
        <Col>
          <Input type="select" name="color" onChange={onInputChange} value={vehicles.color}>
            <option value="" disabled hidden>
              Color
            </option>
            {vehicleColors.map((vehicleColors, i) => (
              <option value={vehicleColors} key={i}>
                {vehicleColors}
              </option>
            ))}
          </Input>
        </Col>
      </Row>
      <Row form>
        <Col>
          <Input
            type="text"
            placeholder="Plate Number"
            name="plateNumber"
            onChange={onInputChange}
            value={vehicles.plateNumber}
          />
        </Col>
        <Col>
          <Input
            type="text"
            placeholder="Registration Number"
            name="registrationNumber"
            onChange={onInputChange}
            value={vehicles.registrationNumber}
          />
        </Col>
      </Row>
      {/* <Row form={true} className="align-items-center">
        <Col>
          <Input
            type="text"
            placeholder="Firstname"
            name="firstname"
            onChange={onInputChange}
            value={UserFormComponentState.userInput.firstname}
          />
        </Col>
        <Col>
          <Input
            type="text"
            placeholder="Lastname"
            name="lastname"
            onChange={onInputChange}
            value={UserFormComponentState.userInput.lastname}
          />
        </Col>
      </Row> */}
    </>
  )
})

export default UserInput
