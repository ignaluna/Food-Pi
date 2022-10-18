const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Diet", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoincrement: true,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
};


