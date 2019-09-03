import React, { FC } from "react";
import Content from "./Content";
// import { Vehicle } from "types";
// import Axios, { AxiosResponse } from "axios";
import Header from "./Header";
import Form from "./@Components/Form";

const Vehicles: FC = () => {
  // const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  return (
    <>
      <Header />
      <Content />
      <Form></Form>
    </>
  );
};

export default Vehicles;
