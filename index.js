const express = require('express');

const cors = require('cors')

const { PORT } = require('./Config')

const { connectDB } = require('./Startup')

const socketIo = require('socket.io');

const { authRouter, fileRouter } = require('./Routes')

// const authRouter = require('./Routes/authRoutes')
const authorization = require('./Middlewares/Auth')

const http = require('http');

const app = express();

const server = http.createServer(app);

const io = socketIo(server,{
  cors: {origin:"http://localhost:5174", methods: ["GET", "POST"]},
});

connectDB();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.json({ msg: "hi from server" })
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





const { addmessage } = require('./Helpers/AddMessage');

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle incoming messages
  socket.on('sendMessage', (messageData) => {
    // Save the message to MongoDB
    console.log(messageData);
    const allMessage=addmessage(messageData);
    // Emit the message to all connected clients
    io.emit('newMessage', allMessage);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
})