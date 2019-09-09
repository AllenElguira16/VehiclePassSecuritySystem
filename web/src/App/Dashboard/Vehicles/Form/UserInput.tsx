import React, { FC, FormEvent, useContext } from "react";
import { observer } from "mobx-react-lite";
import { AppStore } from "Store";
import { Input } from "@Components";

interface Props {
  onInputChange(e: FormEvent<HTMLInputElement>): void;
}

const UserInput: FC<Props> = observer(({ onInputChange }) => {
  const { VehiclesFormComponentState } = useContext(AppStore);
  const { vehicles } = VehiclesFormComponentState;
  return (
    <>
      <Input
        type="text"
        placeholder="Plate Number"
        name="plateNumber"
        onChange={onInputChange}
        value={vehicles.plateNumber}
      />
      <Input
        type="text"
        placeholder="Name"
        name="name"
        onChange={onInputChange}
        value={vehicles.name}
      />
      <Input
        type="text"
        placeholder="Type"
        name="type"
        onChange={onInputChange}
        value={vehicles.type}
      />
      <Input
        type="text"
        placeholder="Color"
        name="color"
        onChange={onInputChange}
        value={vehicles.color}
      />
      <Input
        type="text"
        placeholder="Registration Number"
        name="registrationNumber"
        onChange={onInputChange}
        value={vehicles.registrationNumber}
      />
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
  );
});

export default UserInput;
