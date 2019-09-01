import React, { FC, useState, useEffect } from "react";
import Content from "./Content";
import { Vehicle } from "types";
import Axios, { AxiosResponse } from "axios";

const Vehicles: FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data }: AxiosResponse<Vehicle[]> = await Axios.get("/vehicle");
      if (data) setVehicles(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Content vehicles={vehicles} isLoading={true} />
    </>
  );
};

export default Vehicles;
