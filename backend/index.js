const express = require('express');
const http = require('http');

const app = express();
const httpServer = http.createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:5173', // Update origin to allow requests from your client
    methods: ['GET', 'POST'],
    credentials: true
  }
});

io.on('connection', socket => {
  console.log('User connected:', socket.id);

  socket.on('message', data => {
    io.emit('message', data);
  });

  socket.on('typing', data => {
    socket.broadcast.emit('userTyping', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
