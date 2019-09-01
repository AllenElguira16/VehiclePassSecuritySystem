import React, {
  FC,
  useState
  // useEffect, useCallback
} from "react";
// import Axios from "axios";
import Confirmation from "Components/Confirmation";
import Content from "./Content";
// import Search from "./Content/Header/Search";
// import Form from "./Content/Header/AddUser";
import {
  // User, UserInput,
  ConfirmBox
  // FormProps
} from "types";
// import { Row, Col } from "reactstrap";
// import io from "socket.io-client";

const Employee: FC = (): JSX.Element => {
  // state declarations
  // const [FormType, setFormType] = useState<FormProps["type"]>("create");
  // const [FormToggle, setFormToggle] = useState(false);
  const [confirmBox, setConfirmBox] = useState<ConfirmBox>({
    isOpen: false,
    msg: ""
  });
  // const [userInput, setUserInput] = useState<UserInput>({
  //   userId: "",
  //   firstname: "",
  //   lastname: ""
  // });

  // ConfirmBoxToggler
  const confirmBoxToggler = (msg: string): string => {
    setConfirmBox({ ...confirmBox, isOpen: !confirmBox.isOpen, msg });
    return "";
  };
  //
  return (
    <>
      <Content />
      <Confirmation
        toggle={() => confirmBoxToggler("")}
        isOpen={confirmBox.isOpen}
      >
        {confirmBox.msg}
      </Confirmation>
    </>
  );
};

export default Employee;
