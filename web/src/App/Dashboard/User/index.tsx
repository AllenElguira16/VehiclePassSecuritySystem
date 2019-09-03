import React, { FC } from "react";
// import Confirmation from "@Components/Confirmation";
import Content from "./Content";
// import { ConfirmBox } from "types";
import Form from "./@Components/Form";

const Employee: FC = (): JSX.Element => {
  // const [confirmBox, setConfirmBox] = useState<ConfirmBox>({
  //   isOpen: false,
  //   msg: ""
  // });
  // ConfirmBoxToggler
  // const confirmBoxToggler = (msg: string): string => {
  //   setConfirmBox({ ...confirmBox, isOpen: !confirmBox.isOpen, msg });
  //   return "";
  // };
  //
  return (
    <>
      <Content />
      <Form></Form>
      {/* <Confirmation
        toggle={() => confirmBoxToggler("")}
        isOpen={confirmBox.isOpen}
      >
        {confirmBox.msg}
      </Confirmation> */}
    </>
  );
};

export default Employee;
