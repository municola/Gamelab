const server = require('http').createServer();

const io = require('socket.io')(5609, {
  path: '/',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false,
});

const messages = [];
const users = [];

io.on('connection', (socket) => {
  console.log('connected');
  socket.on('send', (message, name) => {
    messages.push([message, name]);
    socket.broadcast.emit('chatlog', messages);
    socket.emit('chatlog', messages);
    // console.log(messages);
  });
  socket.on('login', (username) => {
    users.push(username);
    // console.log(users);
  });
  socket.on('disconnect', () => {
    console.log('disconnect');
  });
});
