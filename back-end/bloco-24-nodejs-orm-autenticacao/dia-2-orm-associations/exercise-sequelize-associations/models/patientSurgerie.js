module.exports = (sequelize, DataTypes) => {
  const PatientSurgeries = sequelize.define(
    'Patient_surgeries',
    {},
    { timestamps: false }
  );

  PatientSurgeries.associate = (models) => {
    models.Patients.belongsToMany(models.Surgeries, {
      as: 'surgeries',
      through: PatientSurgeries,
      foreignKey: 'surgery_id',
      other_key: 'patient_id',
    });

    models.Surgeries.belongsToMany(models.Patients, {
      as: 'patients',
      through: PatientSurgeries,
      foreignKey: 'patient_id',
      other_key: 'surgery_id',
    });
  };

  return PatientSurgeries;
};
