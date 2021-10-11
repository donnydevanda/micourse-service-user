module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.String,
        allowNull: false,
      },
      name: {
        type: DataTypes.String,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.String,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["admin", "student"],
        allowNull: false,
        defaultValue: "student",
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      profession: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_at: {
        field: "created_at",
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        field: "updated_at",
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      timestamps: true,
    }
  );

  return User;
};
