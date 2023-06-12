// eslint-disable-next-line no-undef
const socket = io.connect('http://localhost:3000', {
  transports: ['websocket']
});

setTimeout(() => {
  socket.emit('client:mensaje', { msg: 'Hola mundo' });
}, 2_000);

socket.on('server:nuevo-calendario', (data) => {
  console.log(data);
});
