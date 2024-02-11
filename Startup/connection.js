const mongoose = require('mongoose')
const { MONGO_URI } = require('../Config')

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.log(`Error connecting to database ${error}`);
  }
}

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB!');
});


mongoose.connection.on('error', (err) => {
  console.error('Connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = {
  connectDB
}