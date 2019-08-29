import {
  Controller,
  Get,
  Post,
  Inject,
  Session,
  BodyParams
} from "@tsed/common";
import { hash, compare } from "bcryptjs";
import { Admin } from "../Service/Admin";
import { MongooseModel } from "@tsed/mongoose";

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

  @Post("/register")
  public async register(@BodyParams() { username, password }: Admin) {
    if (username && password) {
      const hashedPassword = await hash(password, 10);
      const admin = new this.model({ username, password: hashedPassword });
      admin.save((error: any) => {
        if (error) return { error };
        return { success: true };
      });
    } else {
      return { error: "Empty" };
    }
  }
}

export default AdminController;
