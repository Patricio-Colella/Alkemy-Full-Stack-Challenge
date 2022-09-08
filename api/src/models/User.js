const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_name:{
        type: DataTypes.FLOAT,
        // allowNull: false,
    },
    password: {
      type:DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    profile_picture: {
        type: DataTypes.STRING,
    },
    account_amount: {
        type: DataTypes.INTEGER,
        defaultValue:0
    },
  }, {timestamps:false});
};