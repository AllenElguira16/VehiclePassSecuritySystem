import { Get, Post, Controller } from "@overnightjs/core";
import { Request, Response } from "express";
import { hash, compare } from "bcryptjs";
import Admin from "../Models/Admin";

@Controller("api/admin")
class AdminController {
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
    const { username, password }: Admin = request.body;
    const user = await Admin.findOne({ username });
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

  // @Post()
  // public async register(request: Request, response: Response) {
  //   const { username, password }: Admin = request.body;
  //   const hashedPassword = await hash(password, 10);
  //   const admin = new Admin({ username, password: hashedPassword });
  //   admin.save(error => {
  //     if (error) return response.json({ error });
  //     return response.json({ success: true });
  //   });
  // }

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

export default new AdminController();
