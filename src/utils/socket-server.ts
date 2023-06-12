import type socketio from 'socket.io';

let io: socketio.Server;

export const setSocketSerer = (socketServer: socketio.Server) => {
  io = socketServer;
};

export const getSocketServer = () => io;
