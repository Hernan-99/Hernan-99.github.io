import { ReactNode, createContext, useEffect, useReducer } from "react";
import { cuestionarioReducer } from "./Cuestionario.reducer";

import axios from "axios";
//endpoint
const apiUrl = "https://hernan-99.github.io/JsonApi/test.json";

//obtencion de las preguntas
const getData = async () => {
  try {
    const res = axios({
      url: `${apiUrl}`,
      method: "GET",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

//creacion del contexto
export const CuestionarioContext = createContext<any>(null);

// Array para el manejo de estados y definicion del estado inicial
export const ESTADOS_DE_JUEGO = ["Empezar", "Jugando", "Finalizado"];
export const estadoInicial = {
  estadoJuego: ESTADOS_DE_JUEGO[0],
  preguntas: [],
  puntaje: 0,
  preguntaActual: 0,
  respuestaSeleccionada: false,
};

type CuestionarioProviderProps = {
  children: ReactNode;
};

const CuestionarioContextProvider: React.FC<CuestionarioProviderProps> = ({
  children,
}) => {
  const value = useReducer(cuestionarioReducer, estadoInicial);
  return (
    <CuestionarioContext.Provider value={value}>
      {children}
    </CuestionarioContext.Provider>
  );
};

export { CuestionarioContextProvider };
