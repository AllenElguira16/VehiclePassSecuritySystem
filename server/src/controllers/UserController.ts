import { Request, Response } from "express";
import { Controller, Get, Post } from "@overnightjs/core";
import { hash } from "bcryptjs";

@Controller("api/user")
class UserController {
  @Get()
  public getUser(request: Request, response: Response) {
    response.send("Sent!");
  }

  @Post()
  public signIn(request: Request, response: Response) {
    const { username, password }: IUser = request.body;
    hash(password, 10, (error, hash) => {
      if (error) {
        return response.json({ error });
      }
      const { save } = new UserModel({ username, password: hash });
      save(error => {
        if (error) {
          return response.json({ error });
        }
        return response.send({ success: true });
      });
    });
  }
}

export default new UserController();
