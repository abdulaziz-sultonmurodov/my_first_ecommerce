const authentication = (req, res, next) => {
  console.log("Authenticationg...");
  next();
};

module.exports = authentication;
