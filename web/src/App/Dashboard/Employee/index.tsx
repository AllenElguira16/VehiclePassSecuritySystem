import React, { FC, useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "reactstrap";
// import { Row, Col } from "reactstrap";

const Employee: FC = (): JSX.Element => {
  const [employees, setEmployees] = useState([
    {
      employeeId: "",
      firstname: "",
      lastname: "",
      dateCreated: null
    }
  ]);

  useEffect(() => {
    (async () => {
      const { data } = await Axios.get("/employee");
      setEmployees(data);
    })();
  }, []);

  const formatDate = (date: Date | null): string => {
    let readableDate: Date = new Date(date as Date);
    return readableDate.toLocaleDateString();
  };

  return (
    <>
      <header className="h5">Employee List</header>
      <main>
        <Table>
          <tbody>
            <tr>
              <th>Employee ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Date Created</th>
              <th>Options</th>
            </tr>
            {employees.length &&
              employees.map(
                (
                  { employeeId, firstname, lastname, dateCreated }: IEmployee,
                  i: number
                ) => (
                  <tr key={i}>
                    <td>{employeeId}</td>
                    <td>{firstname}</td>
                    <td>{lastname}</td>
                    <td>{formatDate(dateCreated)}</td>
                    <td>
                      <i className="material-icons">settings</i>
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </Table>
      </main>
    </>
  );
};

export default Employee;
