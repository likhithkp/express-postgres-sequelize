'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('transactions', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'orders',
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
    }, {
      timestamps: true,
      createdAt: 'create_at',
      updatedAt: 'updated_at'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};
