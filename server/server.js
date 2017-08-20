const server = require('http').createServer();

const io = require('socket.io')(5609, {
  path: '/',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false,
});

const people = [];

io.on('connection', (socket) => {
  console.log('connected');
  console.log(socket.id);
  socket.on('join', (username) => {
    people.push([socket.id, username]);
    socket.broadcast.emit('newUser', people);
    socket.emit('newUser', people);
    console.log(people);
  });
  socket.on('send', (message, username) => {
    socket.broadcast.emit('newMessage', username, message);
    socket.emit('newMessage', username, message);
  });
  socket.on('disconnect', () => {
    console.log('disconnect');
  });
});
