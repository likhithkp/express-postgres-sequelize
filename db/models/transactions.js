module.exports = (sequelize, DataTypes) => {
    const Transactions = sequelize.define('transactions', {
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

    Transactions.prototype.setAssociation = (models) => {
        Transactions.belongsTo(models.users, { foreignKey: 'user_id' });
        Transactions.belongsToMany(models.orders, {
            through: 'order_transactions',
            foreignKey: 'transaction_id',
        });
    };

    return Transactions;
}