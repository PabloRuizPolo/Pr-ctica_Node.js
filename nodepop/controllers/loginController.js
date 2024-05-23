const User = require("../modelos/User");

class LoginController {
  index(req, res, next) {
    res.locals.error = "";
    res.locals.mail = "";
    res.render("login");
  }

  async enter(req, res, next) {
    try {
      const { email, password } = req.body;

      //find user

      const user = await User.findOne({ email: email });

      //compare user and password

      if (!user || !(await user.comparePassword(password))) {
        res.locals.error = "invalid credentials";
        res.locals.email = email;
        res.render("login");
        return;
      }

      //send to userZone
      res.redirect("userZone");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = LoginController;
