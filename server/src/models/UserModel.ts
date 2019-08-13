import { Schema, Document, model } from "mongoose";

export default model<IUser & Document>(
  "user",
  new Schema<IUser>({
    employeeId: { type: String },
    username: { type: String },
    password: { type: String }
  })
);
