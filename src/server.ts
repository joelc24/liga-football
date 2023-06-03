import express, { type Application } from 'express';
import cors from 'cors';

import { connection } from '@config/dbConnection';
import { ciudadesRouter, departamentosRouter, equiposRouter } from './routes';

export class Server {
  private readonly app: Application;
  private readonly port: string;
  private readonly apiPaths = {
    equipos: '/api/equipos',
    departamentos: '/api/departamentos',
    ciudades: '/api/ciudades'
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT as string;
    this.connectionDB();
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.app.use(express.json());

    this.app.use(cors());
  }

  async connectionDB(): Promise<void> {
    await connection();
  }

  routes(): void {
    this.app.use(this.apiPaths.equipos, equiposRouter);
    this.app.use(this.apiPaths.departamentos, departamentosRouter);
    this.app.use(this.apiPaths.ciudades, ciudadesRouter);
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log('servidor corriendo en el puerto: ', this.port);
    });
  }
}
