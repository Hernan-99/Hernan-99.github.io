import { ReactNode, createContext, useEffect, useReducer } from "react";
import { cuestionarioReducer } from "./Cuestionario.reducer";

import axios from "axios";
//endpoint
const apiUrl = "https://hernan-99.github.io/JsonApi/test.json";

//Configuracion axios
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
  pista: "",
};

type CuestionarioProviderProps = {
  children: ReactNode;
};

const CuestionarioContextProvider: React.FC<CuestionarioProviderProps> = ({
  children,
}) => {
  //Hook para gestionar la etapa del cuestionario ["Empezar", "Jugando", "Finalizado"]
  const [cuestionarioEstado, dispatch] = useReducer(
    cuestionarioReducer,
    estadoInicial
  );

  // Función encargada de obtener los datos de las preguntas desde la ULR donde esta la "api falsa".
  const getPreguntas = async () => {
    try {
      // Solicitud GET
      const res = await getData();

      //Retorno u obtencion de datos.
      if (res) {
        const data = res.data; //almacenamos los datos
        const preg = data.preguntas; //se accede a las preguntas
        const preguntasReodernadas = preg.sort(() => Math.random() - 0.5);

        const preguntasConPistas = preguntasReodernadas.map((e: any) => ({
          ...e,
          pista: e.pista,
        }));

        // almacenanamos el estado del cuestionario con dispatch y el reordenamiento
        dispatch({
          type: "RANDOM_PREGUNTAS",
          payload: preguntasConPistas,
        });
      }
    } catch (error) {
      console.log("Error al obtener las preguntas: ", error);
    }
  };

  // Hook para ejecutar getPreguntas.
  useEffect(() => {
    getPreguntas();
  }, []); //[] Esto para obtener las preguntas al cargar el componente por primera vez.

  return (
    // Para envolver los componentes hijos y proporcionar el valor del estado, la función de envío de acciones (dispatch) y la función getPreguntas por medio del value. Le da acceso a los componentes para usar el estado y las funciones proporcionadas por el contexto.
    <CuestionarioContext.Provider
      value={[cuestionarioEstado, dispatch, getPreguntas]}
    >
      {children}
    </CuestionarioContext.Provider>
  );
};

export { CuestionarioContextProvider };
