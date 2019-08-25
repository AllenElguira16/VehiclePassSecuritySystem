import { Request, Response } from "express";
import { Controller, Get, Post, Delete } from "@overnightjs/core";
import { hash, compare } from "bcryptjs";
import UserModel from "../Models/UserModel";
import EmployeeModel from "../Models/EmployeeModel";

@Controller("api/user")
class UserController {
  // @Get()
  // public async getList(request: Request, response: Response) {
  //   const user = await UserModel.find();
  //   return response.json(user);
  // }

  @Get("auth")
  public getAuthUser(request: Request, response: Response) {
    if (request.session) {
      if (request.session.user)
        return response.json({ ...request.session.user });
      return response.json({ error: true });
    }
    return response.json({ error: true });
  }

  @Post()
  public async signIn(request: Request, response: Response) {
    const { username, password }: IUser = request.body;
    const user = await UserModel.findOne({ username });
    if (!user) return response.json({ error: true });
    const isMatch = await compare(password, user.password);
    if (!isMatch) return response.json({ error: true });
    if (request.session) {
      request.session.user = user;
      request.session.save(error => {
        if (error) return response.json({ error });
        return response.json({ success: true });
      });
    }
  }

  @Post("logout")
  public async logout(request: Request, response: Response) {
    if (request.session) {
      request.session.destroy(err => {
        if (err) return response.json({ error: err });
        return response.json({ success: "Sign out successfully" });
      });
    }
  }

  //
  @Get()
  public async getEmployee(request: Request, response: Response) {
    return response.json(await EmployeeModel.find());
  }

  @Get(":value")
  public async getEmployeeBySearch(request: Request, response: Response) {
    const { value } = request.params;
    if (value) {
      const data = await EmployeeModel.find({
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

export default new UserController();
