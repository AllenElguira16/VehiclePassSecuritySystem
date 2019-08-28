import { Controller, Get, Post, Delete, Put } from "@overnightjs/core";
import { Request, Response } from "express";
import User from "../Models/User";

@Controller("api/user")
class UserController {
  @Get()
  public async getUser(request: Request, response: Response) {
    return response.json(await User.find());
  }

  @Get(":value")
  public async getUserBySearch(request: Request, response: Response) {
    const { value } = request.params;
    if (value) {
      const data = await User.find({
        userId: new RegExp(`^${value}`, "i")
      });
      return response.json(data);
    }
  }

  @Post()
  public async addUser(request: Request, response: Response) {
    const { userId, firstname, lastname } = request.body;
    if (userId === "" || firstname === "" || lastname === "") {
      return response.json({ error: "All inputs are required" });
    }
    const match = await User.find({ userId });
    if (match.length !== 0)
      return response.json({ error: "User already exists" });
    const user = new User({ userId, firstname, lastname });
    user.save((error: any) => {
      if (error) return response.json({ error });
      return response.json({ success: "Created Successfully" });
    });
  }

  @Put()
  public async updateUser(request: Request, response: Response) {
    const { _id, userId, firstname, lastname } = request.body;
    if (userId === "" || firstname === "" || lastname === "") {
      return response.json({ error: "All inputs are required" });
    }
    User.findByIdAndUpdate(_id, { userId, firstname, lastname }, error => {
      if (error) return response.json({ error });
      return response.json({ success: "Updated Successfully" });
    });
  }

  @Delete(":id")
  public async deleteUser(request: Request, response: Response) {
    const userId = request.params.id;
    User.deleteOne({ _id: userId }, error => {
      if (error) return response.json({ error });
      return response.json({ success: "Deleted Successfully" });
    });
  }
}

export default new UserController();
