const express = require('express');

const cors = require('cors')

const { PORT } = require('./Config')

const { connectDB } = require('./Startup')

const app = express();

connectDB();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.json({ msg: "hi from server" })
})

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage
  });
})

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
})