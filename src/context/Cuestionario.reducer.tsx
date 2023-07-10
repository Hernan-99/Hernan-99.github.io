import { ESTADOS_DE_JUEGO, estadoInicial } from "./Cuestionario.context";

// Funcion Reducer
const cuestionarioReducer = (estado: any, accion: any) => {
  console.log(estado, accion);

  //estructura condicional para el manejo de estados
  switch (accion.type) {
    case "CAMBIO_DE_ESTADO":
      return { ...estado, estadoJuego: ESTADOS_DE_JUEGO[1] };

    case "RANDOM_PREGUNTAS": //Actualizar preguntas
      return { ...estado, preguntas: accion.payload };

    case "SIGUIENTE_PREGUNTA":
      // console.log("siguiente");

      // Avanza de pregunta y valida si hay mas preguntas
      const siguiente = estado.preguntaActual + 1;
      let finJuego = false;

      //validacion para terminar juego
      if (!estado.preguntas[siguiente]) {
        finJuego = true;
      }

      // Actualizacion del estado con la siguiente pregunta, el estadoJuego y la respuestaSeleccionada
      return {
        ...estado,
        preguntaActual: siguiente,
        estadoJuego: finJuego ? ESTADOS_DE_JUEGO[2] : estado.estadoJuego,
        respuestaSeleccionada: false,
      };

    case "RECARGAR": // Reinicio del juego
      return { ...estadoInicial, puntaje: 0 };

    case "CHECK_ANSWER": // Validacion para comprobar si la respuesta seleccionada es correcta
      const respuestaCorrecta = accion.payload.respuestaCorrecta;
      const opcion = accion.payload.opcion;
      let esCorrecta = 0;

      //Actualiza el puntaje y respuestaSeleccionada si esta es correcta
      if (respuestaCorrecta === opcion) esCorrecta = 1;
      console.log(accion);

      // Actualiza el estado con el puntaje y la respuesta seleccionada
      return {
        ...estado,
        puntaje: estado.puntaje + esCorrecta,
        respuestaSeleccionada: opcion,
      };

    default:
      return estado;
  }
};

export { cuestionarioReducer };
