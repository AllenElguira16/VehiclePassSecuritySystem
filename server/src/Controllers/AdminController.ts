// import { Get, Post, Controller } from "@overnightjs/core";
import {
  Controller,
  Get,
  Post,
  Inject,
  Session,
  BodyParams
} from "@tsed/common";
import { Request, Response } from "express";
import { hash, compare } from "bcryptjs";
import { Admin } from "../Service/Admin";
import { MongooseModel } from "@tsed/mongoose";
// import Admin from "../Dump/Models/Admin";

@Controller("/admin")
class AdminController {
  constructor(@Inject(Admin) private model: MongooseModel<any>) {
    console.log(model);
  }

  @Get("/auth")
  public getAuth(@Session() session: any) {
    if (session.user) return { ...session.user };
    return { error: true };
  }

  @Post()
  public async signIn(
    @BodyParams() { username, password }: any,
    @Session() session: any
  ) {
    const user = await this.model.findOne({ username });
    if (!user) return { error: true };
    const isMatch = await compare(password, user.password);
    if (!isMatch) return { error: true };
    session.user = user;
    return { success: true };
  }

  @Post("/logout")
  public async logout(@Session() session: any) {
    delete session.user;
    return { success: "Sign out successfully" };
  }
  // @Post(":create")
  // public async register(request: Request, response: Response) {
  //   const { username, password }: Admin = request.body;
  //   const hashedPassword = await hash(password, 10);
  //   const admin = new Admin({ username, password: hashedPassword });
  //   admin.save(error => {
  //     if (error) return response.json({ error });
  //     return response.json({ success: true });
  //   });
  // }
}

export default AdminController;
