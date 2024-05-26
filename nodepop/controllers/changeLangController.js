class ChangeLangController {
  index(req, res, next) {
    const locale = req.params.locale;

    res.cookie("langCookie", locale);

    res.redirect("back");
  }
}

module.exports = ChangeLangController;
