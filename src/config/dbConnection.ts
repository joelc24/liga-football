import { Sequelize } from 'sequelize';

const username = process.env.DB_USERNAME ?? 'root';
const database = process.env.DB_DATABASE ?? 'liga';

export const sequelize = new Sequelize(database, username, '', {
  host: 'localhost',
  dialect: 'mysql'
});

export const connection = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('base de datos online 🟢.');
  } catch (error) {
    console.error('Ocurrio un error al conectar con la base de datos:', error);
  }
};
