'use strict';

// models/Address.js
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    'Address',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      city: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,
      employeeId: { type: DataTypes.INTEGER, foreignKey: true },
      // A declaração da Foreign Key é opcional no model
    },
    {
      timestamps: false,
      tableName: 'Addresses',
      underscored: true,
    }
  );

  // Acho que isso pode ser feito tanto aqui quanto lá
  // Address.associate = (models) => {
  //   Address.belongsTo(models.Employee, {
  //     foreignKey: 'employeeId',
  //     as: 'employees',
  //   });
  // };

  return Address;
};
