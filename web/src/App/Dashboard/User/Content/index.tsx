import React, { FC } from "react";
import Settings from "./Settings";
import { Table } from "reactstrap";
import Loader from "./Loader";
import { User, ContentProps } from "types";
import Page from "./Page";

const Content: FC<ContentProps> = props => {
  const formatDate = (date: Date | null): string => {
    let readableDate: Date = new Date(date as Date);
    return readableDate.toLocaleDateString();
  };

  return (
    <>
      <Table striped responsive size="sm">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Date</th>
            <th>Options</th>
          </tr>
          {props.isLoading && <Loader />}
          {(!props.isLoading && props.users.length) !== 0 ? (
            props.users.map((user: User, i: number) => (
              <tr
                key={i}
                style={{ cursor: "pointer" }}
                onClick={() => props.onClick(user._id)}
              >
                <td className="align-middle">{user.userId}</td>
                <td className="align-middle">{user.firstname}</td>
                <td className="align-middle">{user.lastname}</td>
                <td className="align-middle">{formatDate(user.dateCreated)}</td>
                <Settings
                  toggle={props.confirmBoxToggler}
                  isOpen={props.isOpen}
                  fetchData={props.fetchUsers}
                  user={user}
                  setFormType={props.setFormType}
                  setUserInput={props.setUserInput}
                  setFormToggle={props.setFormToggle}
                />
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                <em>Empty</em>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <Page></Page>
    </>
  );
};

export default Content;
