import { Schema, Document, model } from "mongoose";

export default model<Admin & Document>(
  "admin",
  new Schema<Admin>({
    employeeId: { type: String },
    username: { type: String },
    password: { type: String }
  })
);
