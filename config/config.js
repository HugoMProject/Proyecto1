require('dotenv').config();
module.exports = {

  HOST: process.env.DB_HOST,
  USER: process.env.ENV_USER,
  PASSWORD: process.env.ENV_PASSWORD,
  DB: process.env.ENV_DB,
  PORT:process.env.DB_PORT,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }, 

}

 
  //                      modelo por defencto de sequelize
  // "development": {
  //   "username": "root",
  //   "password": "root",
  //   "database": "e_commerce1",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  // "production": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_production",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // }
