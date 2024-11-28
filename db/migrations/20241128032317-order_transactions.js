'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.createTable('order_transactions', {
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
    })
  },

  async down (queryInterface) {
     await queryInterface.dropTable('order_transactions');
  }
};
