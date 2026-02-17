exports.notFound = (req, res, next) => {
  const { country } = req.body;

  if (!country || typeof country !== "string") {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid city name as text",
    });
  }
  if (country.length < 3 || country.length >= 100) {
    return res.status(400).json({
      success: false,
      message: "A city or country with a very short or very long name",
    });
  }
  if (country.trim() === "" || /\d/.test(country)) {
    return res.status(400).json({
      success: false,
      message: "Name of city or country containing a number or empty field",
    });
  }
  if (/[^a-zA-Z\s\-]/.test(country.trim())) {
    return res.status(400).json({
      success: false,
      message: "Name contains symbols",
    });
  }
  next();
};
