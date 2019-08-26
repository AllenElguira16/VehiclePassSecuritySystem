import React, { FC, useState, useEffect, useCallback } from "react";
import Axios from "axios";
import Confirmation from "Components/Confirmation";
import Content from "./Components/Content";
import Search from "./Components/Search";
import Add from "./Add";
import Types from "types";

const Employee: FC = (): JSX.Element => {
  // state declarations
  const [employees, setEmployees] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [toggle, setToggleValue] = useState(false);
  const [search, setSearch] = useState("");
  const [confirmBox, setConfirmBox] = useState<Types.confirmBox>({
    isOpen: false,
    msg: ""
  });

  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    if (isLoading) {
      setEmployees([]);
      const { data } = await Axios.get(!search ? `/user` : `/user/${search}`);
      if (data) setEmployees(data);
    }
    setLoading(false);
  }, [isLoading, search]);

  // Modal toggle
  const toggler = () => {
    setToggleValue(!toggle);
  };

  // ConfirmBoxToggler
  const confirmBoxToggler = (msg: string): string => {
    setConfirmBox({ ...confirmBox, isOpen: !confirmBox.isOpen, msg });
    return "";
  };

  // Search handler
  const searchOnChange = (value: string) => {
    setLoading(true);
    setSearch(value);
  };

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <main>
      <Search value={search} onChange={searchOnChange} />
      <Content
        employees={employees}
        fetchEmployees={fetchEmployees}
        confirmBoxToggler={confirmBoxToggler}
        isOpen={confirmBox.isOpen}
        isLoading={isLoading}
        onClick={toggler}
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
