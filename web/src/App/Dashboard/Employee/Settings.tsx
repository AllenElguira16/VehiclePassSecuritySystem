import React, { FC } from "react";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleConfirmBox } from "Redux/Actions";

const Settings: FC = (props: any) => {
  // const socket = io();
  // console.log(window.location.origin);

  const onDelete = () => {
    props.openConfirmBox("Are you sure you want to delete?");
    // alert("Are you sure you want to delete?");
    // socket.emit("openConfirmationDialogue", {
    //   msg: "Are you sure you want to delete?"
    // });
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

export default connect(
  null,
  (dispatch: Dispatch<ReduxActionInterface>) => {
    return {
      openConfirmBox: (msg: string) => dispatch(toggleConfirmBox(msg))
    };
  }
)(Settings);
