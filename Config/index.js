require('dotenv').config();

module.exports = {
  PORT: process.env.APP_PORT || 8000,
  MONGO_URI: process.env.MONGO_URI,
  ACCESS_TOKEN_SECRET_KEY: process.env.ACCESS_TOKEN_SECRET_KEY,
  REFRESH_TOKEN_SECRET_KEY: process.env.REFRESH_TOKEN_SECRET_KEY,
  SALT: process.env.SALT,
  FRONTEND_URL: process.env.FRONTEND_URL
}