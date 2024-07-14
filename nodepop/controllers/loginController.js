const User = require("../modelos/User");
var jwt = require("jsonwebtoken");

class LoginController {
  index(req, res, next) {
    res.locals.error = "";
    res.locals.email = "";
    res.render("login");
  }

  async enter(req, res, next) {
    try {
      const { email, password } = req.body;

      //find user

      const user = await User.findOne({ email: email });

      //compare user and password

      if (!user || !(await user.comparePassword(password))) {
        res.locals.error = "Invalid credentials";
        res.locals.email = email;
        res.render("login");
        return;
      }

      //send to index
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  }

  async createJWT(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email: email });

      if (!user || !(await user.comparePassword(password))) {
        res.locals.error = "Invalid credentials";
        return;
      }

      const jwtToken = await jwt.sign(
        { userId: user._id },
        "fwrfbiub5pORB4o3hPUIbipu"
      );

      res.json({ jwtToken: jwtToken });
      console.log(jwtToken);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = LoginController;
