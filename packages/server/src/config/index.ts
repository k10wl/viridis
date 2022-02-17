import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error("Could not find .env file.");
}

const config = {
  PORT: process.env.PORT || 8080,
  JWT_TOKEN: process.env.JWT_TOKEN,
  MONGO_DATABASE_CONNECTION: process.env.MONGO_DATABASE_CONNECTION,
};

export default config;
