'use strict';

const readline = require('node:readline')
//Bring the model of Anuncio
const Anuncio = require('./modelos/Anuncio')
// Bring init-data
const initData = require('./init-data.json')

main().catch(err => console.log('There was an error ', err));

async function main() {
    const wiped = await pregunta('Do you want to remove the content of the DB? (yes/no)')
    
    if (!wiped) {
        process.exit();
    }
    
    // set connection
    const connection = require('./lib/connectMongoose')

    await initAnuncios();
    connection.close();
};

async function initAnuncios() {
    //Delete all the adds
    const deleted = await Anuncio.deleteMany();
    console.log(`${deleted.deletedCount} adds were deleted`)

    // Insert all the adds I give
    /*const upload = await Anuncio.insertMany([
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
            nombre: 'pou',
            venta: true, 
            precio: 1, 
        }
    ]);
    */
   const anuncios = initData.anuncios //bring the list of anuncios in json

   const insert = await Anuncio.insertMany(anuncios) //pass anuncios fo json to Anuncios model
    console.log(`${insert.length} adds were inserted`)
};

//To make sure we want to do this
function pregunta(texto) {
    return new Promise((resolve, reject) => {
      // conect readline with console
      const ifc = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      ifc.question(texto, respuesta => {
        ifc.close();
        resolve(respuesta.toLowerCase() === 'yes');
      })
    });
  }