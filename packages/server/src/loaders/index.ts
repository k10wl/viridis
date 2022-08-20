import { Application } from 'express';

import { debugLog } from 'src/utils';

import { expressLoader } from './express';
import { mongooseLoader } from './mongoose';

interface Arguments {
  expressApp: Application;
}

export async function loadApp({ expressApp }: Arguments): Promise<void> {
  try {
    await mongooseLoader();
    debugLog('MongoDB connection established successfully.');
    expressLoader({ expressApp });
    debugLog('Express connection established successfully.');
  } catch (error) {
    debugLog(error);
  }
}
