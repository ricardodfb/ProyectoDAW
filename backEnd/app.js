// Gestion del servidor
const express = require("express");
const app = express();

// para gestion de peticiones POST, URLs
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true} ));

// para usar variables de entorno
require('dotenv').config();
require('./routes/passport');

// Acceso a peticiones fetch
let cors = require("cors");
app.use(cors());

// Ruta raiz
const apiRouter = require('./routes/proyecto');
app.use('/proyecto', apiRouter );

// Acceso a base de datos
require('./db');

// Arranque de servidor
app.listen(3000, ()=>{
   console.log("Servidor arrancado en el puerto 3000");
});
