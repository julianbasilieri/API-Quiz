const preguntas = [
    {
      pregunta: "¿Qué significa CSS?",
      dificultad: "dificil",
      respuestas: [
        {
          textoRespuesta: "Hojas de estilo de computadora",
          esCorrecta: false,
        },
        {
          textoRespuesta: "Hojas de estilo en cascada",
          esCorrecta: true,
        },
        {
          textoRespuesta: "Hojas de estilo creativo",
          esCorrecta: false,
        },
        {
          textoRespuesta: "Hojas de estilo colorido",
          esCorrecta: false,
        }
      ],
    },
    {
      pregunta: "¿Dónde se recomienda escribir los estilos?",
      dificultad: "facil",
      respuestas: [
        {
          textoRespuesta: "Al fondo del documento",
          esCorrecta: false,
        },
        {
          textoRespuesta: "En cada elemento",
          esCorrecta: false,
        },
        {
          textoRespuesta: "En la etiqueta <head>",
          esCorrecta: true,
        },
        {
          textoRespuesta: "No se pueden escribir estilos",
          esCorrecta: false,
        }
      ],
    },
    {
      pregunta: "¿Que representa un String?",
      dificultad: "media",
      respuestas: [
        {
          textoRespuesta: "No representa nada en programación",
          esCorrecta: false,
        },
        {
          textoRespuesta: "Un texto",
          esCorrecta: true,
        },
        {
          textoRespuesta: "Un número",
          esCorrecta: false,
        },
        {
          textoRespuesta: "Booleano",
          esCorrecta: false,
        }
      ],
    },
    {
      pregunta: "¿Qué etiqueta HTML se usa para definir una hoja de JS interna?",
      dificultad: "facil",
      respuestas: [
        {
          textoRespuesta: "<style>",
          esCorrecta: false,
        },
        {
          textoRespuesta: "<script>",
          esCorrecta: true,
        },
        {
          textoRespuesta: "<JS>",
          esCorrecta: false,
        },
        {
          textoRespuesta: "<JavaScript>",
          esCorrecta: false,
        }
      ],
    },
    {
      pregunta: "¿Qué atributo HTML se usa para definir estilos en línea?",
      dificultad: "facil",
      respuestas: [
        {
          textoRespuesta: "style",
          esCorrecta: true,
        },
        {
          textoRespuesta: "styles",
          esCorrecta: false,
        },
        {
          textoRespuesta: "class",
          esCorrecta: false,
        },
        {
          textoRespuesta: "font",
          esCorrecta: false,
        }
      ],
    },
    {
      pregunta: "¿Cuál es la sintaxis correcta de CSS?",
      dificultad: "dificil",
      respuestas: [
        {
          textoRespuesta: "body: {color= black}",
          esCorrecta: false,
        },
        {
          textoRespuesta: "{body: color= black}",
          esCorrecta: false,
        },
        {
          textoRespuesta: "body= {color= black}",
          esCorrecta: false,
        },
        {
          textoRespuesta: "body {color= black}",
          esCorrecta: true,
        }
      ],
    },
    {
      pregunta: "¿Con que simbolo se llama a un id en CSS?",
      dificultad: "media",
      respuestas: [
        {
          textoRespuesta: "Con un punto .",
          esCorrecta: false,
        },
        {
          textoRespuesta: "Con un guión -",
          esCorrecta: false,
        },
        {
          textoRespuesta: "Con un asterisco #",
          esCorrecta: true,
        },
        {
          textoRespuesta: "Con un mas +",
          esCorrecta: false,
        }
      ],
    },
    {
      pregunta: "¿Como se hace un comentario?",
      dificultad: "facil",
      respuestas: [
        {
          textoRespuesta: "/*comentario*/",
          esCorrecta: true,
        },
        {
          textoRespuesta: "'comentario'",
          esCorrecta: false,
        },
        {
          textoRespuesta: "//comentario//",
          esCorrecta: false,
        },
        {
          textoRespuesta: "//comentario",
          esCorrecta: false,
        }
      ],
    },
    {
      pregunta: "¿Que propiedad cambia el color de la letra?",
      dificultad: "media",
      respuestas: [
        {
          textoRespuesta: "backgroun-color",
          esCorrecta: false,
        },
        {
          textoRespuesta: "text-color",
          esCorrecta: false,
        },
        {
          textoRespuesta: "font-color",
          esCorrecta: false,
        },
        {
          textoRespuesta: "color",
          esCorrecta: true,
        }
      ],
    },
    {
      pregunta: "¿Como se llama a una funcion?",
      dificultad: "dificil",
      respuestas: [
        {
          textoRespuesta: "myfunction()",
          esCorrecta: true,
        },
        {
          textoRespuesta: "myfunction//",
          esCorrecta: false,
        },
        {
          textoRespuesta: "(myfunction)",
          esCorrecta: false,
        },
        {
          textoRespuesta: "myfunction",
          esCorrecta: false,
        }
      ],
    },
  ];

  const service = {     
    getPreguntas: (dificultad) => {         
        if (dificultad && ['facil', 'media', 'dificil'].includes(dificultad)){
            return preguntas.filter((pregunta) => pregunta.dificultad === dificultad);
        }
        return preguntas;     
        },
    getPregunta: (numeroDePregunta) => {
          return preguntas[numeroDePregunta]},
    }   
      module.exports = service;