import { Schema, Document, model } from "mongoose";

export default model<IUser & Document>(
  "user",
  new Schema<IUser>({
    username: { type: String },
    password: { type: String }
  })
);
