import React, { useContext, FormEvent, useState } from 'react'
import { FormModal } from '@Components'
import { observer } from 'mobx-react-lite'
import { AppStore } from 'Store'
import { UncontrolledAlert, FormGroup } from 'reactstrap'
import Axios from 'axios'
import { Response } from 'types'
import UserInput from './UserInput'

const Form = observer(() => {
  const { VehiclesFormComponentState, fetchVehicles, emptyVehicles } = useContext(AppStore)
  // let { toggle, vehicles, type, title } = VehiclesFormComponentState;
  const [response, setResponse] = useState<Response>({
    msg: '',
    type: 'danger',
  })
  const toggler = () => {
    VehiclesFormComponentState.toggle = !VehiclesFormComponentState.toggle
    if (VehiclesFormComponentState.toggle === false) {
      VehiclesFormComponentState.vehicles = {
        id: '',
        plateNumber: '',
        name: '',
        type: '',
        color: '',
        registrationNumber: '',
      }
    }
  }
  const onInputChange = (event: FormEvent<HTMLInputElement>) => {
    let { name, value } = event.currentTarget
    VehiclesFormComponentState.vehicles = {
      ...VehiclesFormComponentState.vehicles,
      [name]: value,
    }
  }
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let response
    // Check form type
    if (VehiclesFormComponentState.type === 'create')
      response = await Axios.post('/vehicle', VehiclesFormComponentState.vehicles)
    else if (VehiclesFormComponentState.type === 'update')
      response = await Axios.put('/vehicle', VehiclesFormComponentState.vehicles)
    else if (VehiclesFormComponentState.type === 'delete')
      response = await Axios.delete(`/vehicle/${VehiclesFormComponentState.vehicles.id}`)
    // set response
    if (response) {
      if (!response.data.error) setResponse({ type: 'success', msg: response.data.success })
      else if (response.data.error) setResponse({ type: 'danger', msg: response.data.error })
    }
    emptyVehicles()
    fetchVehicles()
  }

  return (
    <FormModal
      title={VehiclesFormComponentState.title}
      onSubmit={onSubmit}
      toggle={VehiclesFormComponentState.toggle}
      toggler={toggler}
    >
      {VehiclesFormComponentState.type === 'delete' ? (
        <FormGroup>Are you sure you want to delete?</FormGroup>
      ) : (
        <UserInput onInputChange={onInputChange} />
      )}
      {response.msg.length !== 0 && <UncontrolledAlert color={response.type}>{response.msg}</UncontrolledAlert>}
    </FormModal>
  )
})

export default Form
