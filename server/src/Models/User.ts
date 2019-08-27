import { Schema, Document, model } from "mongoose";

export default model<User & Document>(
  "user",
  new Schema<User>({
    userId: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now() }
  })
);
