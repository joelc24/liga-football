import { saludo } from './prueba.js';

// eslint-disable-next-line no-undef
const socket = io('http://localhost:8080', {
  transports: ['websocket']
});

socket.on('server:nuevo-calendario', (data) => {
  console.log(data);
});

saludo();
