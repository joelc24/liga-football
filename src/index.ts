import { config } from 'dotenv';
import { Server } from './server';
import 'reflect-metadata';

config();

const server = new Server();
server.listen();
