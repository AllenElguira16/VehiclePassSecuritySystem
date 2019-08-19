import React, { FC, useState, useEffect } from "react";
import Axios from "axios";
import { Table } from "reactstrap";
import Settings from "./Settings";
import Loader from "Components/Loader";
import Input from "Components/Input";
// import { Row, Col } from "reactstrap";

const Employee: FC = (): JSX.Element => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let isMount = true;
    (async () => {
      const { data } = await Axios.get("/employee");
      if (data && isMount) setEmployees(data);
    })();
    return () => {
      isMount = false;
    };
  }, []);

  const formatDate = (date: Date | null): string => {
    let readableDate: Date = new Date(date as Date);
    return readableDate.toLocaleDateString();
  };

  return (
    <>
      {/* <header className="h5">Employee List</header> */}
      <main>
        <Input value={search} placeholder="search"/>
        <Table striped>
          <tbody>
            <tr>
              <th>Employee ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Date Created</th>
              <th>Options</th>
            </tr>
            {employees.length !== 0 ? (
              employees.map(
                (
                  { employeeId, firstname, lastname, dateCreated }: IEmployee,
                  i: number
                ) => (
                  <tr key={i}>
                    <td className="align-middle">{employeeId}</td>
                    <td className="align-middle">{firstname}</td>
                    <td className="align-middle">{lastname}</td>
                    <td className="align-middle">{formatDate(dateCreated)}</td>
                    {/* <td> */}
                    <Settings />
                    {/* </td> */}
                  </tr>
                )
              )
            ) : (
              <tr>
                <td colSpan={5}>
                  <Loader />
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </main>
    </>
  );
};

export default Employee;
