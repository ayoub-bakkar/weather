const getCountry = (req, res) => {
  const { country } = req.body;
  res.send(`${country}`);
};
module.exports = {
  getCountry,
};