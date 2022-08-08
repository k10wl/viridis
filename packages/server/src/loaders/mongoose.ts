import mongoose from 'mongoose';

import config from 'src/config';

const mongooseLoader = async () => {
  try {
    await mongoose.connect(config.MONGO_DATABASE_CONNECTION as string);
  } catch (error) {
    console.error('Error while establishing connection to MongoDB', error);
  }
};

export default mongooseLoader;
