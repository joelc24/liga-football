import type socketio from 'socket.io';

/**
 * Funcion para definir los eventos de socket
 * @param {socketio.Server} io
 */
export const defineSocketEvents = (io: socketio.Server) => {
  //* Escuchar la conexion de clientes
  io.on('connection', (socket) => {
    console.log('cliente conectado: ', socket.id);

    socket.on('client:mensaje', (data) => {
      console.log(data);
    });
  });

  io.on('disconnect', (socket) => {
    console.log('cliente desconectado: ', socket.id);
  });
};
