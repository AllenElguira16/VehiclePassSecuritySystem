import React, { FC, useState, useEffect, useCallback } from "react";
import Axios from "axios";
import Confirmation from "Components/Confirmation";
import Content from "./Components/Content";
import Search from "./Components/Search";
import Add from "./Add";

interface confirmBox {
  isOpen: boolean;
  msg: string;
}

const Employee: FC = (): JSX.Element => {
  // state declarations
  const [employees, setEmployees] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [toggle, setToggleValue] = useState(false);
  const [confirmBox, setConfirmBox] = useState<confirmBox>({
    isOpen: false,
    msg: ""
  });

  // componentDidMount
  // const fetchEmployees = useCallback(async () => {
  //   setLoading(true);
  //   if (isLoading) {
  //     const { data } = await Axios.get("/user");
  //     if (data) setEmployees(data);
  //   }
  //   setLoading(false);
  // }, [isLoading]);

  const fetchEmployees = async (value?: string) => {
    setLoading(true);
    if (isLoading) {
      setEmployees([]);
      const { data } = value
        ? await Axios.get(`/user/${value}`)
        : await Axios.get(`/user`);
      if (data) setEmployees(data);
    }
    setLoading(false);
  };
  // useEffect(() => {
  //   fetchEmployees();
  // });

  // Modal Functions
  const toggler = () => {
    setToggleValue(!toggle);
  };
  const confirmBoxToggler = (msg: string): string => {
    setConfirmBox({ ...confirmBox, isOpen: !confirmBox.isOpen, msg });
    return "";
  };

  return (
    <main>
      {/* <Search onSearch={e => fetchEmployees(e)} /> */}
      <Content
        employees={employees}
        fetchEmployees={fetchEmployees}
        confirmBoxToggler={confirmBoxToggler}
        isOpen={confirmBox.isOpen}
        isLoading={isLoading}
        onClick={id => {
          // addCurrentEmployee(id);
          toggler();
        }}
      />
      <Add />
      <Confirmation
        toggle={() => confirmBoxToggler("")}
        isOpen={confirmBox.isOpen}
      >
        {confirmBox.msg}
      </Confirmation>
    </main>
  );
};

export default Employee;
