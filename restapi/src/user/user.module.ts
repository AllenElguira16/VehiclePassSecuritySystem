import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import userSchema from "./user.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: "user", schema: userSchema }])],
})
export class UserModule {}
