const { Patients, Plans, Surgeries } = require('../models');

const getAllPatientsPlans = async (_req, res) => {
  try {
    const patientsPlans = await Patients.findAll({
      include: { model: Plans, as: 'plan' },
    });
    if (!patientsPlans) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(patientsPlans);
  } catch (err) {
    return res.status(500).json({ message: 'miou' });
  }
};

const getAllPatientsSurgeries = async (_req, res) => {
  const patientsSurgeries = await Patients.findAll({
    include: { model: Surgeries, as: 'surgeries', through: { attributes: [] } },
  });
  if (!patientsSurgeries) {
    return res.status(404).send({ message: 'No patients found' });
  }

  return res.status(200).json(patientsSurgeries);
};

const getAllPatientsWithPlan = async (req, res) => {
  // const patient = await Patients.findAll({ where: { plan_id: req.params.id } });
  const patient = await Plans.findAll({
    include: {
      model: Patients,
      as: 'patients',
      where: { plan_id: req.params.id },
    },
  });

  if (!patient) {
    return res.status(404).send({ message: 'No patients found' });
  }

  return res.status(200).json(patient);
};

module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  getAllPatientsWithPlan,
};
