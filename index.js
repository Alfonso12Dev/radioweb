//<-Constantes a utilizar-> 
const express = require('express'), app = express();
const colors = require("colors");

//<-Hacemos que con express se corra el código que está en la carpeta public-> 
app.use(express.static(__dirname + "/public"));

//<-Sí obtenemos un error 404, retornamos al usuario a otra página->
app.use((req, res, next) => { 

//<-Retornamos la respuesta 404 con el código de una sencilla sección dedicada al error 404->
res.status(404).send("<h1>La sección que estás buscando no fue encontrada en el servidor!!</h1>") 
})
    
//<-En la línea 3000 (wifi) arrancará el server->
app.listen(3000, () => { console.log(`(INFO)`.blue+` El servidor ha arrancado exitosamente`.green); });

/** <-Sí llega a ocurrir un error, lo añadimos en consola-> */
process.on('uncaughtException', (err, origin) => {
console.log(`(INFO)`.blue+` ${err}, ${origin}`.red);
});