const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Operation', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    info:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount:{
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE(),
        primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },{timestamps:false});
};
