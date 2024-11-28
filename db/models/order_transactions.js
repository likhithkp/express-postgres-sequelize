module.exports = (sequelize, DataTypes) => {
    const OrderTransactions = sequelize.define('order_transactions', {
      order_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'orders',
          key: 'id',
        },
      },
      transaction_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'transactions',
          key: 'id',
        },
      },
    }, {
      timestamps: false, // Optional: No timestamps for join table
    });
  
    return OrderTransactions;
  };
  