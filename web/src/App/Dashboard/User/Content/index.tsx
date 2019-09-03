import React, { FC, useEffect, useContext } from "react";
import { Table } from "reactstrap";
import io from "socket.io-client";
// import Axios from "axios";
import { User } from "types";
import Loader from "@Components/Loader";
// import Page from "./Page";
import Settings from "./Settings";
import Header from "./Header";
import { AppStore } from "Store";
import { observer } from "mobx-react-lite";

const Content: FC = observer(() => {
  const { UserContentState, fetchUsers } = useContext(AppStore);
  const { isLoading, users } = UserContentState;
  //
  useEffect(() => {
    fetchUsers();
    const socket = io("http://localhost:8000");
    socket.on("fetchUser", () => {
      fetchUsers();
    });
  }, [UserContentState, fetchUsers]);

  const formatDate = (date: Date | null): string => {
    return new Date(date as Date).toLocaleDateString();
  };

  return (
    <>
      <Header />
      <Table striped responsive size="sm">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Date</th>
            <th>Options</th>
          </tr>
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
});

export default Content;
