const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      unique:true,
    }, 
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {min: 1, max: 5}
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {min: 1, max: 12}
    },
    season: {
      type: DataTypes.ENUM("Summer", "Fall", "Winter", "Spring"),
      allowNull: false,
    }
  }, {timestamps: false});
};