module.exports = {

  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "e_commerce1",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }, 
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
}
