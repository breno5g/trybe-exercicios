const router = require('express').Router();
const { teamsValidate } = require('../helpers/index');
const { readFile, writeFile } = require('../utils/readWriteFile');

router.get('/teams', (req, res) => {
  const teams = JSON.parse(readFile('teams.json'));

  if (teams.length === 0) return res.status(200).json({ teams: [] });
  return res.status(200).json(teams);
});

router.post('/teams', (req, res) => {
  const { name, initials, country, league = 'undefined' } = req.body;
  const isValid = teamsValidate(name, initials, country);
  if (!isValid) return res.status(400).json({ message: 'invalid data' });
  writeFile('teams.json', { name, initials, country, league });
  return res.status(200).json(readFile('teams.json'));
});

module.exports = router;
