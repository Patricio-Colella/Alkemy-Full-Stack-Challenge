const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    user_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    profile_picture: {
        type: DataTypes.STRING,
        defaulValue:""
    },
    account_amount: {
        type: DataTypes.INTEGER,
        defaultValue:0
    },
  }, {timestamps:false});
};