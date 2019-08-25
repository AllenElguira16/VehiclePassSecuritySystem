import { Schema, Document } from "mongoose";

export default new Schema<IUser>({
  employeeId: { type: String },
  username: { type: String },
  password: { type: String },
});
