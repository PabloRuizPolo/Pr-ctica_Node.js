class LoginController {
  index(req, res, next) {
    res.locals.error = "";
    res.locals.mail = "";
    res.render("login");
  }
}
