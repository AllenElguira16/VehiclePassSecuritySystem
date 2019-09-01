import React, { FC, useState, useEffect } from "react";
import { Table } from "reactstrap";
import io from "socket.io-client";
import Axios from "axios";
import { User } from "types";
import Loader from "Components/Loader";
// import Page from "./Page";
import Settings from "./Settings";
import Header from "./Header";

const Content: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true);
  //
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      if (isLoading) {
        setUsers([]);
        // const { data } = await Axios.get(!search ? `/user` : `/user/${search}`);
        const { data } = await Axios.get("/user");
        if (data) setUsers(data);
      }
      setLoading(false);
    };
    fetchUsers();
    const socket = io("http://localhost:8000");
    socket.on("fetchUser", () => {
      fetchUsers();
    });
  }, [isLoading]);

  const formatDate = (date: Date | null): string => {
    return new Date(date as Date).toLocaleDateString();
  };

  return (
    <>
      <Header></Header>
      <Table striped responsive size="sm">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Date</th>
            <th>Options</th>
          </tr>
          {/* {isLoading && } */}
          {!isLoading && users.length !== 0 ? (
            users.map((user: User, i: number) => (
              <tr key={i} style={{ cursor: "pointer" }}>
                <td className="align-middle">{user.userId}</td>
                <td className="align-middle">{user.firstname}</td>
                <td className="align-middle">{user.lastname}</td>
                <td className="align-middle">{formatDate(user.dateCreated)}</td>
                <Settings user={user} />
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                {isLoading ? <Loader></Loader> : <em>Empty</em>}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      {/* <Page></Page> */}
    </>
  );
};

export default Content;
