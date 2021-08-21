import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  secret: {
    token: process.env.TOKEN,
  },
  externalService: {
    wooliesBaseUrl: process.env.WOOLIES_BASE_URLs,
  },
  port: parseInt(process.env.PORT, 10),
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
  api: {
    prefix: '/api',
  },
};
