import { config } from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import AllModels from '@models/index';
config();

const username = process.env.DB_USERNAME as string;
const database = process.env.DB_DATABASE as string;
const dbHost = process.env.DB_HOST as string;
const dbPassword = process.env.DB_PASSWORD as string;
const dbPort = Number(process.env.DB_PORT);

export const sequelize = new Sequelize({
  database,
  username,
  password: dbPassword,
  host: dbHost,
  dialect: 'mysql',
  port: dbPort,
  models: [...AllModels]
  // models: [path.resolve(__dirname, '/models/**/*models.ts')],
  // modelMatch: (filename, member) => {
  //   return (
  //     filename.substring(0, filename.indexOf('.model')) === member.toLowerCase()
  //   );
  // }
});

export const connection = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('base de datos online 🟢.');
  } catch (error) {
    console.error('Ocurrio un error al conectar con la base de datos:', error);
  }
};
