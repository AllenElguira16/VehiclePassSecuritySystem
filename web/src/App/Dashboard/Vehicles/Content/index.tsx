import React, { FC, useContext, useEffect } from 'react'
import { Table, Button } from 'reactstrap'
import { Vehicle } from 'types'
import Loader from '@Components/Loader'
import { observer } from 'mobx-react-lite'
import { AppStore } from 'Store'

const Content: FC = observer(() => {
  const { fetchVehicles, VehiclesContentState } = useContext(AppStore)
  const { isLoading, vehicles } = VehiclesContentState
  const { QRModalOpen } = useContext(AppStore)

  useEffect(() => {
    fetchVehicles()
  }, [fetchVehicles])

  return (
    <Table striped responsive>
      <tbody>
        <tr>
          <th>Plate Number</th>
          <th>Name</th>
          <th>Type</th>
          <th>Color</th>
          <th>Registration Number</th>
          <th>Options</th>
        </tr>
        {!isLoading && vehicles.length !== 0 ? (
          vehicles.map((vehicle: Vehicle, i: number) => (
            <tr key={i} style={{ cursor: 'pointer' }}>
              <td className="align-middle">{vehicle.plateNumber}</td>
              <td className="align-middle">{vehicle.name}</td>
              <td className="align-middle">{vehicle.type}</td>
              <td className="align-middle">{vehicle.color}</td>
              <td className="align-middle">{vehicle.registrationNumber}</td>
              <td className="align-middle">
                <Button onClick={() => QRModalOpen(vehicle.id)}>QRCode</Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="text-center">
              {isLoading ? <Loader /> : <em>Empty</em>}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  )
})

export default Content