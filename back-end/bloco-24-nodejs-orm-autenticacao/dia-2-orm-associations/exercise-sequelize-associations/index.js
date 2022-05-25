const bodyParser = require('body-parser');
const patientsController = require('./controllers/patientController');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/patientsPlans', patientsController.getAllPatientsPlans);
app.get('/patientsSurgeries', patientsController.getAllPatientsSurgeries);
app.get('/patientsWithPlan/:id', patientsController.getAllPatientsWithPlan);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
