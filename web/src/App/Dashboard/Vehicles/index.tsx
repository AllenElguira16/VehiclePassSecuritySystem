import React, { FC } from 'react'
import Content from './Content'
// import { Vehicle } from "types";
// import Axios, { AxiosResponse } from "axios";
import Header from './@Components/Header'
import Form from './@Components/Form'
import QRCodeModal from './@Components/QRCodeModal'

const Vehicles: FC = () => {
  // const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  return (
    <>
      <Header />
      <Content />
      <Form />
      <QRCodeModal />
    </>
  )
}

export default Vehicles
