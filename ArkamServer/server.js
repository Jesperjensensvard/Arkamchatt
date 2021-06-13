
require('dotenv').config()
const express = require('express');
const app = express();
const http = require('http');
const mysql = require('mysql')
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const connection  = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: '',
  database: process.env.DATABASE_NAME
});
/* app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
}); */
app.get('/', (req, res, next) => {
  next()
});  

app.use(express.static('public'))

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});
//io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
server.listen(3000, () => {
  console.log('listening on *:3000');
});