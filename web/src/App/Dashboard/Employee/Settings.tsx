import React, { FC } from "react";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";
import Axios from "axios";

type Props = {
  isOpen: boolean;
  toggle(msg: string): string;
  employeeId: string;
  fetchData(): void;
};

const Settings: FC<Props> = ({ employeeId, fetchData }) => {
  const onDelete = async () => {
    // toggle("Are you sure you want to delete?");
    await Axios.delete(`/employee/${employeeId}`);
    fetchData();
    // console.log(data);
  };

  return (
    <>
      <UncontrolledDropdown tag="td">
        <DropdownToggle color="primary" className="d-flex">
          <i className="material-icons">settings</i>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem onClick={onDelete}>Delete</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};

export default Settings;
