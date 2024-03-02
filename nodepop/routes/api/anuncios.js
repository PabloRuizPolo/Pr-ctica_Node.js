var express = require('express');
var router = express.Router();
const Anuncio = require('../../modelos/Anuncio');

/* GET /api/anuncios
return anuncios list */
router.get('/', async function(req, res, next) {
    try {
        //filters
        //http://127.0.0.1:3000/api/anuncios?tags=lifestyle&nombre=bicicleta&venta=true
        const filterByName = req.query.nombre;
        const filterByTag = req.query.tags;
        const filterByVenta = req.query.venta;

        //page
        //http://127.0.0.1:3000/api/anuncios?skip=2&limit=5
        const skip = req.query.skip;
        const limit = req.query.limit;

        //field list
        const fields = req.query.fields
    
        const filter = {}

        // ?nombre=nombre
        if (filterByName) {
            filter.nombre = { $regex: `^${filterByName}`, $options: 'i' };
        }
        // ?tags=nombre
        if (filterByTag) {
            filter.tags = { $all: filterByTag };
        }
        // ?venta=true or false
        if (filterByVenta === 'true') {
            filter.venta = true
        } else if (filterByVenta === 'false') {
            filter.venta = false
        }
        

        const anuncios = await Anuncio.listar(filter, skip, limit, fields);
        res.json({ results: anuncios});

    } catch (error) {
        next(error)
    }
});

//POST /api/anuncios (body)
// Create a new anuncio
router.post('/', async(req, res, next) => {
    //paso los datos que recibo a variables
    try {
        const anuncioInfo = req.body;
        // creamos una instancia  de agente en memoria
        const anuncio = new Anuncio(anuncioInfo);

        // Lo persistimos (guardamos) en la BD
        const anuncioSave = await anuncio.save();

        res.json({result: anuncioSave});

    } catch (error) {
        next(error)
    }
});

//GET /api/anuncios/(vender or comprar)
//show adds to buy with 'comprar' and to sell whit 'vender'
router.get('/:accion', async (req, res, next) => {
    try {
        const accion = req.params.accion
        let quiero;
    
        if (accion === 'vendo') {
            quiero = true
        } else if (accion === 'compro') {
            quiero = false
        }
        console.log(quiero)
        const anuncios = await Anuncio.find({venta: quiero})
        res.json({results: anuncios})
    } catch (error) {
        next(error)
    }
})


module.exports = router;
