import { useContext } from "react";
import { CuestionarioContext } from "../../context/Cuestionario.context";
import { Container, Row, Col, Card } from "react-bootstrap";

import "../../assets/styles/EndGame.style.css";

const EndGame = () => {
  const [cuestionarioEstado, dispatch] = useContext(CuestionarioContext);

  return (
    <Container fluid className="fondo-color">
      <Row className="d-flex justify-content-center vh-100 align-items-center">
        <Col xs="12" md="12" lg="8">
          <Card className="text-center text-light custom-bg-color">
            <Card.Header>
              <h2 className="m-0">Fin del juego</h2>
            </Card.Header>
            <Card.Body>
              {/* Se muestra el puntaje alcanzado */}
              <Card.Title>
                <h2 className="m-0">
                  Puntuacion: {cuestionarioEstado.puntaje}
                </h2>
                <h2 className="m-0">
                  Alcanzaste: {cuestionarioEstado.puntaje} puntos de{" "}
                  {cuestionarioEstado.preguntas.length} puntos totales
                </h2>
              </Card.Title>

              {/* boton para cambiar de estado y volver a jugar */}
              <button
                className="btn_recargar d-block w-100"
                onClick={() => {
                  dispatch({ type: "RECARGAR" });
                }}
              >
                Jugar de nuevo
              </button>
              <div></div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default EndGame;
