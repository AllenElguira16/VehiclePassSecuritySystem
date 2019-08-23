import React, { FC, useState, useEffect, useCallback } from "react";
import Axios from "axios";
import Confirmation from "Components/Confirmation";
import Content from "./Content";
import Search from "./Search";
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
  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    if (isLoading) {
      const { data } = await Axios.get("/employee");
      if (data) setEmployees(data);
    }
    setLoading(false);
  }, [isLoading]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

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
      <Search />
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
