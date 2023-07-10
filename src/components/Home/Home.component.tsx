import { useContext, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

import { CuestionarioContext } from "../../context/Cuestionario.context";
import "../../assets/styles/Home.style.css";

const Home = () => {
  const [estadoCuestionario, dispatch, getPreguntas] =
    useContext(CuestionarioContext);
  // console.log(estado);

  useEffect(() => {
    getPreguntas();
  }, []);

  return (
    <Container fluid className="bg-content p-5">
      <Row>
        <Col xs={12} md={12} lg={12} className="text-center mb-2">
          <h1>Bienvenido!</h1>
          <p>Haga click en el boton para comenzar</p>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12} lg={12}>
          <Nav.Link>
            <button
              className="btn_comenzar"
              onClick={() => {
                dispatch({ type: "CAMBIO_DE_ESTADO" });
              }}
            >
              Comenzar juego
            </button>
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
