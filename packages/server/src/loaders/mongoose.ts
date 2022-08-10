import mongoose from 'mongoose';

import { CONFIG } from 'src/config';
import { debugLog } from 'src/utils';

export async function mongooseLoader(): Promise<void> {
  try {
    await mongoose.connect(CONFIG.MONGO_DATABASE_CONNECTION as string, {
      dbName: CONFIG.MONGO_DATABASE_NAME,
    });
  } catch (error) {
    debugLog('Error while establishing connection to MongoDB', error);
  }
}
