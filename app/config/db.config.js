module.exports = {
  HOST: "db4free.net",
  USER: "testzenbit",
  PASSWORD: "12345678",
  DB: "zenbitdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};