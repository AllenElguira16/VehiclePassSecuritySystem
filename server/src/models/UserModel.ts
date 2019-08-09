import { Schema, Document, model } from 'mongoose';

export default model<iUser & Document>('user', new Schema<iUser>({
  username: { type: String },
  password: { type: String }
}));