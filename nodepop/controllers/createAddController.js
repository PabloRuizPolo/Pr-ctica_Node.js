const Anuncio = require("../modelos/Anuncio");

class CreateAddController {
  index(req, res, next) {
    res.render("createAdd");
  }
  async post(req, res, next) {
    try {
      const { nombre, venta, precio, tags } = req.body;
      const { foto } = req.file;

      await Anuncio.create({
        nombre,
        venta,
        precio,
        tags,
        foto: req.file.filename,
      });

      res.redirect("/");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CreateAddController;
