import { connect } from 'mongoose';

const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@sdhs.avssiuy.mongodb.net/?retryWrites=true&w=majority`

export const dbConnect = async () => {
  await connect(connectionString);
  console.log('db connected');
}