module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
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
    }, {
        // Disable Sequelize's default timestamps
        timestamps: true,
        // Specify custom column names for the timestamps
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
  
    Users.prototype.setAssociation = (models) => {
      // Setting the association here, consistent with Sequelize's convention
      Users.hasMany(models.orders, { foreignKey: 'user_id' });
    };

    return Users;
  };
  