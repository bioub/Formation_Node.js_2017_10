const net = require('net');

const server = net.createServer();

server.on('close', () => {
  console.log('Server stopped');
});
server.on('connection', (socket) => {
  //socket.pipe(process.stdout);

  socket.on('data', (data) => {
    console.log(data.toString());
  });
});
server.on('error', (err) => {
  console.log('Error : ', err.message);
});
server.on('listening', (...args) => {
  console.log('Server started');
});

server.listen(1234);
