import 'dotenv/config';

import express from 'express';

import { CONFIG } from 'src/config';
import { loadApp } from 'src/loaders';
import { debugLog } from 'src/utils';

async function startServer(): Promise<void> {
  try {
    const expressApp = express();

    await loadApp({ expressApp });

    expressApp.listen(CONFIG.PORT, () => {
      debugLog(`Listening on port: ${CONFIG.PORT}.`);
    });
  } catch (error) {
    debugLog(error);
  }
}

startServer().catch(error => debugLog(error));
