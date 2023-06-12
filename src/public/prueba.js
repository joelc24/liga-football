// eslint-disable-next-line no-undef
const socket = io('http://localhost:8080');

export const saludo = () => {
  setTimeout(() => {
    socket.emit('client:mensaje', { msg: 'Hola mundo' });
  }, 2_000);
};
