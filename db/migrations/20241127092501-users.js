'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
      // Creating the 'users' table
      await queryInterface.createTable('users', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(70),
          allowNull: true,
          unique: true,
        },
        first_name: {
          type: DataTypes.STRING(40),
          allowNull: true,
        },
        middle_name: {
          type: DataTypes.STRING(40),
          allowNull: true,
        },
        last_name: {
          type: DataTypes.STRING(40),
          allowNull: true,
        },
        mob_no: {
          type: DataTypes.STRING(15),
          allowNull: true,
          unique: true,
        },
        whatsapp_no: {
          type: DataTypes.STRING(15),
          allowNull: true,
          unique: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        },
      },  {
        // Disable Sequelize's default timestamps
        timestamps: true,
        // Specify custom column names for the timestamps
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users');

  }
};
