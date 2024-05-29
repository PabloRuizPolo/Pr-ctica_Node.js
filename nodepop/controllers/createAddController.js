const Anuncio = require("../modelos/Anuncio");

class CreateAddController {
  index(req, res, next) {
    res.render("createAdd");
  }
  async post(req, res, next) {
    try {
      const { nombre, venta, precio, tags, image } = req.body;

      await Anuncio.create({
        nombre,
        venta,
        precio,
        tags,
        image,
      });

      res.redirect("/");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CreateAddController;
