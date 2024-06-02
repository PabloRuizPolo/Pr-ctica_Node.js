# Nodepop

## Developers

To start the app in _dev_ mode use:

```js
npm run dev
```

To start worker to make thumbnails:

```js
npx nodemon fotoThumbnailMaker.js
```

**DANGER, use only if you know what you are doing**
To initialize the database:

```sh
npm run initDb
```

## WEBSITE

**To get the home page**
GET http://127.0.0.1:3000/

```
Nodepop
Search and Create adds with Nodepop

Lista de productos
Bicicleta

Se vende: true

Precio: 230.15

lifestyle,motor

Bicicleta

iPhone 3GS

Se vende: false

Precio: 50

lifestyle,mobile

iPhone 3GS
```

**To get the products list with filters**
GET http://127.0.0.1:3000?tags=lifestyle&nombre=bicicleta&venta=true

```
Nodepop
Search and Create adds with Nodepop

Lista de productos
Bicicleta

Se vende: true

Precio: 230.15

lifestyle,motor

Bicicleta

```

**To get the product´s images**
GET http://127.0.0.1:3000/images/(product´s name)
GET http://127.0.0.1:3000/images/Bicicleta
img

## API

**To get the Products list**
GET http://127.0.0.1:3000/api/anuncios

```json
"results": [
        {
            "_id": "65e072802477275b36492afd",
            "nombre": "Bicicleta",
            "venta": true,
            "precio": 230.15,
            "foto": "bici.jpg",
            "tags": [
                "lifestyle",
                "motor"
            ],
            "__v": 0
        }]
```

**To get the Products people want to buy**
GET http://127.0.0.1:3000/api/anuncios/compro

```json
{
  "_id": "65e1f418821fc2ee0706f3a1",
  "nombre": "iPhone 3GS",
  "venta": false,
  "precio": 50,
  "foto": "iphone.png",
  "tags": ["lifestyle", "mobile"],
  "__v": 0
}
```

**To get the Products people want to sell**
GET http://127.0.0.1:3000/api/anuncios/vendo

```json
{
  "_id": "65e354d0a378165f48dbcd18",
  "nombre": "Bicicleta",
  "venta": true,
  "precio": 230.15,
  "foto": "bicycle-161524_1280.png",
  "tags": ["lifestyle", "motor"],
  "__v": 0
}
```

**To get the Products filter by name or/and tags or/and if they are selling or searching**
GET http://127.0.0.1:3000/api/anuncios?tags=(tag you want)&nombre=(name you want)&venta=(true or false)

```json
{
  "_id": "65e1f418821fc2ee0706f3a0",
  "nombre": "Bicicleta",
  "venta": true,
  "precio": 230.15,
  "foto": "bici.jpg",
  "tags": ["lifestyle", "motor"],
  "__v": 0
}
```

**To page in the search**
GET http://127.0.0.1:3000/api/anuncios?skip=2&limit=5

```json
{
"_id": "65e354d0a378165f48dbcd1a",
"nombre": "Pala de padel",
"venta": false,
"precio": 25,
"tags": [
"lifestyle"
],
"__v": 0
},
```

**To get the list of tags every product has**
GET http://127.0.0.1:3000/api/anuncios?fields=%20-_id%20-venta%20-precio%20-foto%20-__v

```json
{
"nombre": "Bicicleta",
"tags": [
"lifestyle",
"motor"
]
},
```

**To create a new product´s add**
POST http://127.0.0.1:3000/api/anuncios (body)

```json
{
  "_id": "65e35aa86caa241668fde008",
  "nombre": "Cama",
  "venta": false,
  "precio": 25,
  "tags": [],
  "__v": 0
}
```
