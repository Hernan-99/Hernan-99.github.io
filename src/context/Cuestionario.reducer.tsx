import { ESTADOS_DE_JUEGO, estadoInicial } from "./Cuestionario.context";

const cuestionarioReducer = (estado: any, accion: any) => {
  console.log(estado, accion);

  switch (accion.type) {
    case "CAMBIO_DE_ESTADO":
      return estado;

    default:
      return estado;
  }
};

export { cuestionarioReducer };
