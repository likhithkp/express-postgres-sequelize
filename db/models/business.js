module.exports = (sequelize, DataTypes) => {
    const Businesses = sequelize.define('businesses', {
      id: {
        type: DataTypes.UUID,
        field: 'id',
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['partnership', 'privateLimited', 'soleProp', 'publicLimited'],
      },
      gst_in: {
        type: DataTypes.STRING(15),
        allowNull: true,
        unique: true,
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
    }, { underscored: true });

    return Businesses;
  };
  