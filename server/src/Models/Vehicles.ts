import { Schema, Document, model } from "mongoose";

type UserModel = User & Document;

export default model<UserModel>(
  "vehicles",
  new Schema<User>({
    plateNumber: { type: String, required: true },
    registrationNumber: { type: String, required: true },
    type: { type: String, required: true },
    color: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now() }
  })
);
