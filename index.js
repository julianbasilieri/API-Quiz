const express = require("express");
const app = express();
const preguntas = require ("./constantes/preguntas");

app.get("/", function(request,response){
    response.send("hola mundos");
});

app.get("/preguntas", function(request,response){
    const queryparams = request.query;
    response.send(preguntas.getPreguntas(queryparams.dificultad));
});

app.get("/preguntas/:numeroDePregunta", function(request,response){
    const numeroDePregunta = request.params.numeroDePregunta;
    if (numeroDePregunta > 0 && numeroDePregunta < 10){
    response.send(preguntas.getPregunta(numeroDePregunta));
    } else {
        response.status(400).send("numero de pregunta invalido");
    }
});

app.listen(3000, () => {     
    console.log("El servidor está inicializado en el puerto 3000"); 
});
