import React, { FC, useState, useEffect, useCallback } from "react";
import Axios from "axios";
import Confirmation from "Components/Confirmation";
import Content from "./Content";
import Search from "./Search";
import Form from "./Form";
import { User, UserInput, ConfirmBox, FormProps } from "types";

const Employee: FC = (): JSX.Element => {
  // state declarations
  const [FormType, setFormType] = useState<FormProps["type"]>("create");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [toggle, setToggleValue] = useState(false);
  const [search, setSearch] = useState("");
  const [FormToggle, setFormToggle] = useState(false);
  const [confirmBox, setConfirmBox] = useState<ConfirmBox>({
    isOpen: false,
    msg: ""
  });
  const [userInput, setUserInput] = useState<UserInput>({
    userId: "",
    firstname: "",
    lastname: ""
  });

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    if (isLoading) {
      setUsers([]);
      const { data } = await Axios.get(!search ? `/user` : `/user/${search}`);
      if (data) setUsers(data);
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
  //
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  //
  return (
    <>
      <Search value={search} onChange={searchOnChange} />
      <Content
        users={users}
        fetchUsers={fetchUsers}
        confirmBoxToggler={confirmBoxToggler}
        isOpen={confirmBox.isOpen}
        isLoading={isLoading}
        onClick={toggler}
        setFormType={setFormType}
        setFormToggle={setFormToggle}
        setUserInput={setUserInput}
      />
      <Form
        setUser={setUserInput}
        user={userInput}
        type={FormType}
        setFormType={setFormType}
        setToggle={setFormToggle}
        toggle={FormToggle}
      />
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
