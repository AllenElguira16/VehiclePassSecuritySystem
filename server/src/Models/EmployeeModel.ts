import { Schema, Document, model } from "mongoose";

export default model<IEmployee & Document>(
  "employee",
  new Schema<IEmployee>({
    employeeId: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    dateCreated: { type: Date, default: Date.now() }
  })
);
