import { Application } from 'express';

import expressLoader from './express';
import mongooseLoader from './mongoose';

const loadApp = async ({
  expressApp,
}: {
  expressApp: Application;
}): Promise<void> => {
  try {
    await mongooseLoader();
    console.log('MongoDB connection established successfully.');
    expressLoader({ expressApp });
    console.log('Express connection established successfully.');
  } catch (error) {
    console.error(error);
  }
};

export default loadApp;
