import { Controller, Get, Post, Delete } from "@overnightjs/core";
import { Request, Response } from "express";
import User from "../Models/User";

@Controller("api/user")
class UserController {
  @Get()
  public async getEmployee(request: Request, response: Response) {
    return response.json(await User.find());
  }

  @Get(":value")
  public async getEmployeeBySearch(request: Request, response: Response) {
    const { value } = request.params;
    if (value) {
      const data = await User.find({
        employeeId: new RegExp(`^${value}`, "i")
      });
      return response.json(data);
    }
  }

  @Post("add")
  public async addEmployee(request: Request, response: Response) {
    const { employeeId, firstname, lastname } = request.body;
    if (employeeId === "" || firstname === "" || lastname === "") {
      return response.json({ error: "All inputs are required" });
    }
    const match = await User.find({ employeeId });
    if (match.length !== 0)
      return response.json({ error: "User already exists" });
    const user = new User({ employeeId, firstname, lastname });
    user.save((error: any, newUser: { _id: any }) => {
      if (error) return response.json({ error });
      return response.json({ id: newUser._id });
    });
  }

  @Delete(":id")
  public async deleteEmployee(request: Request, response: Response) {
    const employeeId = request.params.id;
    User.deleteOne({ _id: employeeId }, error => {
      if (error) return response.json({ error });
      return response.json({ success: "Deleted Successfully" });
    });
  }
}

export default new UserController();
