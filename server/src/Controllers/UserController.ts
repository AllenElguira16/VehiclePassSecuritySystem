import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Inject,
  BodyParams,
  PathParams
} from "@tsed/common";
import { User } from "../Model/User";
import { MongooseModel } from "@tsed/mongoose";
// import { Request, Response } from "express";
// import User from "../Models/User";

@Controller("/user")
class UserController {
  constructor(@Inject(User) private user: MongooseModel<any>) {}

  @Get()
  public async getUser() {
    return await this.user.find();
  }

  @Get("/:value")
  public async getUserBySearch(@PathParams() { value }: any) {
    if (value) {
      return await this.user.find({
        userId: new RegExp(`^${value}`, "i")
      });
    }
  }

  @Post()
  public async addUser(@BodyParams() params: any) {
    const { userId, firstname, lastname } = params;
    if (userId === "" || firstname === "" || lastname === "")
      return { error: "All inputs are required" };

    const match = await this.user.find({ userId });
    if (match.length !== 0) return { error: "User already exists" };
    const user = new this.user({ userId, firstname, lastname });
    user.save((error: any) => ({ error }));
    return { success: "Created Successfully" };
  }

  @Put()
  public async updateUser(@BodyParams() params: any) {
    const { id, userId, firstname, lastname } = params;
    if (userId === "" || firstname === "" || lastname === "")
      return { error: "All inputs are required" };
    this.user.findByIdAndUpdate(id, { userId, firstname, lastname }, error => {
      if (error) return { error };
      return { success: "Updated Successfully" };
    });
  }

  @Delete("/:id")
  public async deleteUser(@BodyParams() params: any) {
    const userId = params.id;
    this.user.deleteOne({ _id: userId }, error => {
      if (error) return { error };
      return { success: "Deleted Successfully" };
    });
  }
}

export default UserController;
