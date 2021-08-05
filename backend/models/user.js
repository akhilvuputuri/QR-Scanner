module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
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
    User.hasMany(models.Voucher);

    // User.belongsToMany(models.Voucher, {
    //   through: "User_Fav",
    //   constraints: false,
    // });
  };
  return User;
};
