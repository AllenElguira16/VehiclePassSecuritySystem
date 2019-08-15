import { Controller, Get, Post } from "@overnightjs/core";
import { Request, Response } from "express";
import EmployeeModel from "../Models/EmployeeModel";

@Controller("api/employee")
class EmployeeController {
  @Get()
  public async getEmployee(request: Request, response: Response) {
    return response.json(await EmployeeModel.find());
  }

  @Post("add")
  public addEmployee(request: Request, response: Response) {
    const { employeeId, firstname, lastname } = request.body;
    if (employeeId === "" || firstname === "" || lastname === "") {
      return response.json({ error: "All inputs are required" });
    }
    const user = new EmployeeModel({ employeeId, firstname, lastname });
    user.save((error, newUser) => {
      if (error) return response.json({ error });
      return response.json({ id: newUser._id });
    });
  }
}

export default new EmployeeController();
