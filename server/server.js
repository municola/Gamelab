const server = require('http').createServer();

const io = require('socket.io')(5609, {
  path: '/',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false,
});

let people = [];

io.on('connection', (socket) => {
  console.log('connected');
  socket.on('join', (username) => {
    people.push([socket.id, username]);
    socket.broadcast.emit('newUser', people);
    socket.emit('newUser', people);
    socket.broadcast.emit('update', `${username} connected`);
  });
  socket.on('send', (message, username) => {
    socket.broadcast.emit('newMessage', username, message);
    socket.emit('newMessage', username, message);
  });
  socket.on('room', (i) => {
    socket.join(i);
  });
  socket.on('test', (msg) => {
    console.log(msg);
  });
  socket.on('disconnect', () => {
    console.log('disconnect');
    const name = people.filter((item) => {
      return item[0] === socket.id;
    });
    people = people.filter((item) => {
      return item[0] !== socket.id;
    });
    socket.broadcast.emit('newUser', people);
    socket.emit('newUser', people);
    socket.broadcast.emit('update', `${name[0][1]} disconnected`);
  });
});
