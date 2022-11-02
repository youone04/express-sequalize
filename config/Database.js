import Sequelize from 'sequelize';

const sequelize = new Sequelize('db_express', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

export default sequelize;