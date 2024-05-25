const createError = require("http-errors");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const jwtToken = req.get("Authorization") || req.body.jwt || req.query.jwt;

  if (!jwtToken) {
    next(createError(401, "token nor found"));
    return;
  }

  jwt.verify(jwtToken, "fwrfbiub5pORB4o3hPUIbipu", (error, payload) => {
    if (error) {
      next(createError(401, "invalid token"));
      return;
    }

    req.userIdApi = payload.userId;
    next();
  });
};
