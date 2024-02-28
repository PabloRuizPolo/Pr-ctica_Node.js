'use strict';

const connection = require('./lib/connectMongoose')
const Anuncio = require('./modelos/Anuncio')

main().catch(err => console.log('There was an error ', err));

async function main() {
    await initAnuncios();
    connection.close();
};

async function initAnuncios() {
    //Borramos los anuncios
    const deleted = await Anuncio.deleteMany();
    console.log(`${deleted.deletedCount} adds were deleted`)

    // Los volvemos a cargar
    const upload = await Anuncio.insertMany([
        {
            nombre: 'Iphone',
            venta: false, 
            precio: 300,  
            tags: ['mobile']
        },
        {
            nombre: 'Alove Vera',
            venta: true, 
            precio: 1500, 
            tags: ['lifestyle']
        },
        {
            nombre: 'ou',
            venta: true, 
            precio: 1, 
        }
    ]);
    console.log(`${upload.length} adds were inserted`)
}