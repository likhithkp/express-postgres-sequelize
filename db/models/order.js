const Sequelize = require("sequelize");
const sequelize = require("../../config/database");

module.exports = sequelize.define('order', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
}, {
    freezeTableName: true,
    modelName: "order"
})