import dotenv from 'dotenv';

const DOTENV = dotenv.config();

if (DOTENV.error) {
  throw new Error('Could not find .env file.');
}

export const CONFIG = {
  PORT: process.env.PORT || 3000,
  MONGO_DATABASE_CONNECTION: process.env.MONGO_DATABASE_CONNECTION,
  MONGO_DATABASE_NAME: process.env.MONGO_DATABASE_NAME,
  DEBUG_NAMESPACE: 'Viridis:server',
} as const;
