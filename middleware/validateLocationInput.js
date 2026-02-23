exports.validateLocationInput = (req, res, next) => {
  const { locationQuery } = req.body;

  if (!locationQuery || typeof locationQuery !== "string") {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid city name as text",
    });
  }
  if (locationQuery.trim() === "" || /\d/.test(locationQuery)) {
    return res.status(400).json({
      success: false,
      message: "Name of city or city containing a number or empty field",
    });
  }
  if (locationQuery.length < 3 || locationQuery.length >= 100) {
    return res.status(400).json({
      success: false,
      message: "A city or city with a very short or very long name",
    });
  }
  const invalidSymbolsRegex = /[^a-zA-Z\u0621-\u064A\s\-]/;
  if (invalidSymbolsRegex.test(locationQuery.trim())) {
    return res.status(400).json({
      success: false,
      message: "Name contains symbols",
    });
  }
  next();
};
