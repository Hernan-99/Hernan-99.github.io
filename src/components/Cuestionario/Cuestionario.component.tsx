//SOLUCIONAR BUG

import { useContext, useEffect } from "react";

// Bootstrap
import { Container, Row, Card, Col } from "react-bootstrap";

// Context
import { CuestionarioContext } from "../../context/Cuestionario.context";

//Componentes
import Opcion from "../Opciones/Opciones.component";

// Estilos
import "../../assets/styles/Cuestionario.style.css";

//Definicion del componente funcional
const Cuestionario: React.FC = () => {
  // Hook para acceder al CuestionarioContext
  const [cuestionarioEstado, dispatch, getPreguntas] =
    useContext(CuestionarioContext);
  console.log(cuestionarioEstado);

  // variables para almacenar el numero de la pregunta, el numero total de preguntas y la pregunta
  // que se muesta actualmente
  const numPreguntaActula = cuestionarioEstado.preguntaActual + 1;
  const numTotalPreguntas = cuestionarioEstado.preguntas.length;
  const mostrarPregunta =
    cuestionarioEstado.preguntas[cuestionarioEstado.preguntaActual];

  const selectedOption = (opcion: string) => {
    // console.log(option);
    dispatch({
      type: "CHEK_ANSWER",
      //mostrarPregunta.respuesta referencia a la api
      payload: { respuestaCorrecta: mostrarPregunta.respuesta, opcion },
    });
  };

  useEffect(() => {
    getPreguntas();
  }, []);

  return (
    <Container fluid className="fondo-color">
      <Row className="d-flex justify-content-center vh-100 align-items-center">
        <Col xs="12" md="8" lg="8">
          <Card className="text-center text-light card">
            <Card.Header className="header-card">
              <h2 className="mb-2">
                Pregunta: {numPreguntaActula} de {numTotalPreguntas}
              </h2>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <h2 className="m-0">{mostrarPregunta.pregunta}</h2>
              </Card.Title>
              <div></div>
              <div id="options-container" className="mb-4">
                {/* Condicional para renderizar las preguntas  */}
                {mostrarPregunta &&
                  mostrarPregunta.opciones &&
                  mostrarPregunta.opciones.map((opcion: string) => (
                    <Opcion
                      opcion={opcion}
                      key={opcion}
                      respuestaCorrecta={mostrarPregunta.respuesta}
                      opSelec={() => {
                        selectedOption(opcion);
                      }}
                      seleccionada={false}
                    />
                  ))}
              </div>
              <div></div>
              <Card.Text></Card.Text>
              {/* Condicional para renderizar el boton luego de que el usuario haya seleccionado
              una opcion  */}
              {cuestionarioEstado.respuestaSeleccionada && (
                <button
                  className="w-100 btn_siguiente"
                  onClick={() => {
                    dispatch({ type: "SIGUIENTE_PREGUNTA" });
                  }}
                >
                  Siguiente
                </button>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Cuestionario;
