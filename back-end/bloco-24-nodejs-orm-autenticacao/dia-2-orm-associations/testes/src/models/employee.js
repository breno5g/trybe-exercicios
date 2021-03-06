'use strict';

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    'Employee',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'Employees',
      underscored: true,
    }
  );

  // Comentei a do outro lado e funciona também
  // relacionamento 1:1
  // Employee.associate = (models) => {
  //   Employee.hasOne(models.Address, {
  //     foreignKey: 'employeeId',
  //     as: 'addresses',
  //   });
  // };

  // 1:N
  // Na tabela nada muda, mas nas funções do sequelize sim
  Employee.associate = (models) => {
    Employee.hasMany(models.Address, {
      foreignKey: 'employee_id',
      as: 'addresses',
    });
  };

  return Employee;
};
