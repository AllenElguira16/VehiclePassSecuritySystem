import { Request, Response } from "express";
import { Controller, Get, Post } from "@overnightjs/core";
import { hash, compare } from "bcryptjs";
import UserModel from "../Models/UserModel";

@Controller("api/user")
class UserController {
  @Get()
  public async getList(request: Request, response: Response) {
    const user = await UserModel.find();
    return response.json(user);
  }

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
}

export default new UserController();
