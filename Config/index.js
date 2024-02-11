require('dotenv').config();

module.exports = {
  PORT: process.env.APP_PORT || 8000,
  MONGO_URI: process.env.MONGO_URI
}