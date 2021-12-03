"use strict"; //  Opcional. para que salga error si no escribimos con buenas practicas
var http = require("http"); // Exportamos un modulo que tiene JS, en este caso HTTP.

const op = require("./operacione.js");

var server = http.createServer(function(req, res){
    res.writeHead(200, {"content-type": "text/plain"}); // Estado de la respuesta y tipo de información
    res.end("Hola mundo") // TExto plano a enviar
});

//console.log("Resultado", op.suma(56, 45));


console.log("Nombre es:", op.getNombre());
server.listen(8080); 