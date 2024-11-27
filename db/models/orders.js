module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('orders', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',  // Reference to the Users model
        key: 'id',       // The primary key in Users
      },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  },{
    // Disable Sequelize's default timestamps
    timestamps: true,
    // Specify custom column names for the timestamps
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

  Orders.prototype.setAssociation = (models) => {
    // Defining the reverse association (Order -> User)
    Orders.belongsTo(models.users, { foreignKey: 'user_id' });
  };

  return Orders;
};
