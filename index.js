const express = require('express');

const cors = require('cors')

const { PORT } = require('./Config')

const { connectDB } = require('./Startup')

const { authRouter, fileRouter } = require('./Routes')

// const authRouter = require('./Routes/authRoutes')
const authorization = require('./Middlewares/Auth')

const app = express();

connectDB();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', authorization, (req, res) => {
  res.json({ msg: "hi from server", user_id: req.user_id })
})

app.use('/api/auth', authRouter)
app.use('/api/file', authorization, fileRouter)

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