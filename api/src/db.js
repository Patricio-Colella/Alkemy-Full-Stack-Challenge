require('dotenv').config();
const { Sequelize } = require('sequelize');
const user = require("./models/User")
const operation = require("./models/Operation")
const {
  DB_USER, DB_PASSWORD, DB_HOST,DB_NAME,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

user(sequelize)
operation(sequelize)

const { User,Operation } = sequelize.models;

User.hasMany(Operation)
Operation.belongsTo(User)

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
