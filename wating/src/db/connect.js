import { connect } from 'mongoose';

const connectionString = `mongodb+srv://${process.env.REAT_APP_MONGODB_USERNAME}:${process.env.REAT_APP_MONGODB_PASSWORD}@sdhs.avssiuy.mongodb.net/?retryWrites=true&w=majority`

export const dbConnect = async () => {
  await connect(connectionString);
  console.log('db connected');
}