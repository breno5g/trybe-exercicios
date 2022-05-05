// eslint-disable-next-line no-unused-vars
const error = (err, _req, res, _next) => {
  if (!err.status) {
    return res.status(500).json({ message: 'Internal server error' });
  }

  return res.status(err.status).json({ message: err.message });
};

module.exports = error;
