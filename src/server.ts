import express, { type Application } from 'express';
import cors from 'cors';
import socket from 'socket.io';
import http from 'http';
import path from 'path';

import { connection } from '@config/dbConnection';
import {
  ciudadesRouter,
  departamentosRouter,
  equiposRouter,
  jugadoresRouter,
  contactoEquipoRouter,
  calendarioRouter,
  truncarTablesRouter,
  insercionMasivaRouter,
  golesRouter,
  consultasEstidisticasRouter
} from './routes';
import { defineSocketEvents } from '@utils/socket-events';
import { setSocketSerer } from '@utils/socket-server';

export class Server {
  private readonly app: Application;
  private readonly port: string;
  private readonly io: socket.Server;
  private readonly http: http.Server;
  private readonly apiPaths = {
    equipos: '/api/equipos',
    departamentos: '/api/departamentos',
    ciudades: '/api/ciudades',
    jugadores: '/api/jugadores',
    contactoEquipo: '/api/contacto-equipo',
    calendario: '/api/calendario',
    truncarTables: '/api/truncate-tables',
    insercionMasiva: '/api/insercion-masiva',
    goles: '/api/goles',
    estadisticas: '/api/estadisticas'
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT as string;
    this.http = http.createServer(this.app);
    this.io = new socket.Server(this.http);
    this.connectionDB();
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.app.use(express.json());

    this.app.use(cors());

    this.app.use(express.static(path.resolve(__dirname, 'public')));
  }

  async connectionDB(): Promise<void> {
    await connection();
  }

  routes(): void {
    this.app.use(this.apiPaths.equipos, equiposRouter);
    this.app.use(this.apiPaths.departamentos, departamentosRouter);
    this.app.use(this.apiPaths.ciudades, ciudadesRouter);
    this.app.use(this.apiPaths.jugadores, jugadoresRouter);
    this.app.use(this.apiPaths.contactoEquipo, contactoEquipoRouter);
    this.app.use(this.apiPaths.calendario, calendarioRouter);
    this.app.use(this.apiPaths.truncarTables, truncarTablesRouter);
    this.app.use(this.apiPaths.insercionMasiva, insercionMasivaRouter);
    this.app.use(this.apiPaths.goles, golesRouter);
    this.app.use(this.apiPaths.estadisticas, consultasEstidisticasRouter);
    setSocketSerer(this.io);
  }

  private initSockets(): void {
    defineSocketEvents(this.io);
  }

  listen(): void {
    this.http.listen(this.port, () => {
      console.log('servidor corriendo en el puerto: ', this.port);
    });

    this.initSockets();
  }
}
