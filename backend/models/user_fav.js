module.exports = (sequelize, DataTypes) => {
  const User_Fav = sequelize.define("User_Fav", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    voucher_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return User_Fav;
};
