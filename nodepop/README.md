# Nodepop

## Developers
To start the app in *dev* mode use:
```js
npm run dev
```

**DANGER, use only if you know what you are doing**
To initialize the database:
```sh
npm run initDb
```

## API
**To get the Anuncios list**

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



