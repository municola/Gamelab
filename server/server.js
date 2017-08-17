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

io.on('connection', (socket) => {
  console.log('connected');
  socket.on('button', () => {
    socket.emit('answer', 'hello');
  });
  socket.on('foodButton', () => {
    socket.emit('bestFood', 'pizza');
  });
  socket.on('send', (message) => {
    messages.push(message);
    socket.broadcast.emit('chatlog', messages);
    socket.emit('chatlog', messages);
    console.log(messages);
  });
});
