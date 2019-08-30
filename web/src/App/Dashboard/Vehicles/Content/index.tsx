import React, { FC, useEffect } from "react";
// import Settings from "./Settings";
import { Table } from "reactstrap";
// import Loader from "./Loader";
import { Vehicle } from "types";
import Loader from "Components/Loader";
// import io from "socket.io-client";
interface Props {
  vehicles: Vehicle[];
  isLoading: boolean;
}

const Content: FC<Props> = props => {
  // const formatDate = (date: Date | null): string => {
  //   let readableDate: Date = new Date(date as Date);
  //   return readableDate.toLocaleDateString();
  // };

  return (
    <Table striped responsive>
      <tbody>
        <tr>
          <th>Plate Number</th>
          <th>Name</th>
          <th>Type</th>
          <th>Color</th>
          <th>Registration Number</th>
        </tr>
        {props.isLoading && (
          <tr>
            <td colSpan={5}>
              <Loader />
            </td>
          </tr>
        )}
        {(!props.isLoading && props.vehicles.length) !== 0 ? (
          props.vehicles.map((vehicle: Vehicle, i: number) => (
            <tr key={i} style={{ cursor: "pointer" }}>
              <td className="align-middle">{vehicle.plateNumber}</td>
              <td className="align-middle">{vehicle.name}</td>
              <td className="align-middle">{vehicle.type}</td>
              <td className="align-middle">{vehicle.color}</td>
              <td className="align-middle">{vehicle.registrationNumber}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="text-center">
              <em>Empty</em>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default Content;
