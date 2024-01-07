import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  id: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  isAdmin: {
    type: Boolean,
    require: true
  }
});

export const User = model('User', userSchema);