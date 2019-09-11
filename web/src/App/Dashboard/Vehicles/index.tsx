import React, { FC } from 'react'
import Content from './Content'
// import { Vehicle } from "types";
// import Axios, { AxiosResponse } from "axios";
import Header from './Header'
import Form from './Form'
import QRCodeModal from './QRCodeModal'

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
