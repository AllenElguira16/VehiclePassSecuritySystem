import React from "react";
import Settings from "./Settings";
import { Table } from "reactstrap";
import Loader from "./Loader";

type Props = {
  employees: Array<IEmployee>;
  confirmBoxToggler(msg: string): string;
  isOpen: boolean;
  fetchEmployees(): void;
  isLoading: boolean;
  onClick(id: string): void;
};

const Content: React.FC<Props> = ({
  employees,
  confirmBoxToggler,
  fetchEmployees,
  isOpen,
  isLoading,
  onClick
}) => {
  const formatDate = (date: Date | null): string => {
    let readableDate: Date = new Date(date as Date);
    return readableDate.toLocaleDateString();
  };

  return (
    <Table striped>
      <tbody>
        <tr>
          <th>Employee ID</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Date Created</th>
          <th>Options</th>
        </tr>
        {isLoading && <Loader />}
        {(!isLoading && employees.length) !== 0 ? (
          employees.map((employee: IEmployee, i: number) => (
            <tr
              key={i}
              style={{ cursor: "pointer" }}
              onClick={() => onClick(employee._id)}
            >
              <td className="align-middle">{employee.employeeId}</td>
              <td className="align-middle">{employee.firstname}</td>
              <td className="align-middle">{employee.lastname}</td>
              <td className="align-middle">
                {formatDate(employee.dateCreated)}
              </td>
              <Settings
                toggle={confirmBoxToggler}
                isOpen={isOpen}
                fetchData={fetchEmployees}
                employeeId={employee._id}
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
  );
};

export default Content;
