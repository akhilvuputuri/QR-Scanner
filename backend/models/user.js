module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.TEXT,
    },
  });

  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Voucher, {
      foreignKey: "id",
      sourceKey: "id",
    });
  };
  return User;
};
