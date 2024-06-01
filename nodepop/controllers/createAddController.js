const Anuncio = require("../modelos/Anuncio");
const { Requester } = require("cote");

const requester = new Requester({ name: "Nodeapp" });

class CreateAddController {
  index(req, res, next) {
    res.render("createAdd");
  }
  async post(req, res, next) {
    try {
      const { nombre, venta, precio, tags } = req.body;
      const { foto } = req.file.filename;

      //Creamos la demanda del microservici para crear un thumbnail
      const service = {
        type: "make-thumbnail",
        url: `../nodepop/public/productImage/${req.file.filename}`,
        name: req.file.filename,
      };
      requester.send(service, () => {});

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
