import { Schema, Document, model } from "mongoose";

export default model<IEmployee & Document>(
  "employee",
  new Schema<IEmployee>({
    employeeId: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now() }
  })
);
