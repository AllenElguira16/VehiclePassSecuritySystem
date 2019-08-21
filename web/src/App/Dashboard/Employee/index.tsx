import React, { FC, useState, useEffect, useCallback } from "react";
import Axios from "axios";
import Confirmation from "Components/Confirmation";
import Content from "./Content";
import Search from "./Search";
import Vehicles from "./Vehicles";

interface confirmBox {
  isOpen: boolean;
  msg: string;
}

const Employee: FC = (): JSX.Element => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentEmployee, addCurrentEmployee] = useState("");
  const [confirmBox, setConfirmBox] = useState<confirmBox>({
    isOpen: false,
    msg: ""
  });

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

  const confirmBoxToggler = (msg: string): string => {
    setConfirmBox({ ...confirmBox, isOpen: !confirmBox.isOpen, msg });
    return "";
  };

  const [toggle, setToggleValue] = useState(false);

  const toggler = () => {
    setToggleValue(!toggle);
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
          addCurrentEmployee(id);
          toggler();
        }}
      />
      <Vehicles
        employeeId={currentEmployee}
        toggle={toggle}
        toggler={() => {
          toggler();
          addCurrentEmployee("");
        }}
      />
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
