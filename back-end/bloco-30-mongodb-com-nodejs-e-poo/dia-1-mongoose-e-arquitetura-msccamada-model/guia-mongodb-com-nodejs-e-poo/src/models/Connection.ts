// ./src/models/Connection.ts

import 'dotenv/config';
import mongoose from 'mongoose';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || 'mongodb://localhost:27017/glassesStore',
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
