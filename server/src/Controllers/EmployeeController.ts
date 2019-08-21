import { Controller, Get, Post, Delete } from "@overnightjs/core";
import { Request, Response } from "express";
import EmployeeModel from "../Models/EmployeeModel";

@Controller("api/employee")
class EmployeeController {
  @Get()
  public async getEmployee(request: Request, response: Response) {
    return response.json(await EmployeeModel.find());
  }

  @Post("add")
  public async addEmployee(request: Request, response: Response) {
    const { employeeId, firstname, lastname } = request.body;
    if (employeeId === "" || firstname === "" || lastname === "") {
      return response.json({ error: "All inputs are required" });
    }
    const match = await EmployeeModel.find({ employeeId });
    // console.log(isExists.length);
    if (match.length !== 0)
      return response.json({ error: "Employee already exists" });
    const user = new EmployeeModel({ employeeId, firstname, lastname });
    user.save((error, newUser) => {
      if (error) return response.json({ error });
      return response.json({ id: newUser._id });
    });
  }

  @Delete(":id")
  public async deleteEmployee(request: Request, response: Response) {
    const employeeId = request.params.id;
    EmployeeModel.deleteOne({ _id: employeeId }, error => {
      if (error) return response.json({ error });
      return response.json({ success: "Deleted Successfully" });
    });
  }
}

export default new EmployeeController();
