import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { InjectModel } from "@nestjs/mongoose";

@Controller("api/user")
export class UserController {
  // constructor(@InjectModel("employee") private readonly user: IEmployee) {}
  constructor(private readonly user: UserService) {}

  @Get()
  public findAll() {
    return this.user.fetch();
  }
}
