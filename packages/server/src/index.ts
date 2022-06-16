import express from "express";

import config from "./config";
import loaders from "./loaders";

const startServer: () => Promise<void> = async () => {
  try {
    const expressApp = express();

    await loaders({ expressApp });

    expressApp.listen(config.PORT, () => {
      console.log(`Listening on port: ${config.PORT}.`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer().catch((error) => console.error(error));
