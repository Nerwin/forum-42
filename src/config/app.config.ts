import dotenv from 'dotenv';
dotenv.config();

const config: { [key: string]: any } = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  apiEndpoint: '/graphql',
};

export default config;
